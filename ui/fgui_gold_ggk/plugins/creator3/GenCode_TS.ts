import { FairyEditor, FairyGUI } from 'csharp';
import CodeWriter from './CodeWriter';

function genCode(handler: FairyEditor.PublishHandler) {
    console.log("enter function genCode");
    let settings = (<FairyEditor.GlobalPublishSettings>handler.project.GetSettings("Publish")).codeGeneration;
    let codePkgName = handler.ToFilename(handler.pkg.name); //convert chinese to pinyin, remove special chars etc.
    let exportCodePath = handler.exportCodePath + '/' + codePkgName;
    let namespaceName = codePkgName;
    let ns = "fgui";
    let isThree = handler.project.type == FairyEditor.ProjectType.ThreeJS;

    if (settings.packageName)
        namespaceName = settings.packageName + '.' + namespaceName;

    //CollectClasses(stripeMemeber, stripeClass, fguiNamespace)
    let classes = handler.CollectClasses(settings.ignoreNoname, settings.ignoreNoname, ns);
    handler.SetupCodeFolder(exportCodePath, "ts"); //check if target folder exists, and delete old files

    let getMemberByName = settings.getMemberByName;

    let classCnt = classes.Count;
    let writer = new CodeWriter({ blockFromNewLine: false, usingTabs: true });

    for (let i: number = 0; i < classCnt; i++) {
        let classInfo = classes.get_Item(i);
        let members = classInfo.members;
        let references = classInfo.references;
        writer.reset();

        writer.writeln('import * as fgui from "fairygui-cc";');
        writer.writeln();
    
        let refCount = references.Count;
        if (refCount > 0) {
            for (let j: number = 0; j < refCount; j++) {
                let ref = references.get_Item(j);
                writer.writeln('import %s from "./%s";', ref, ref);
            }
            writer.writeln();
        }

        if (isThree) {
            writer.writeln('import * as fgui from "fairygui-three";');
            if (refCount == 0)
                writer.writeln();
        }

        writer.writeln('export default class %s extends %s', classInfo.className, classInfo.superClassName);
        writer.startBlock();
        writer.writeln();

        let memberCnt = members.Count;
        for (let j: number = 0; j < memberCnt; j++) {
            let memberInfo = members.get_Item(j);
            writer.writeln('public %s:%s;', memberInfo.varName, memberInfo.type);
        }
        writer.writeln('public static URL:string = "ui://%s%s";', handler.pkg.id, classInfo.resId);
        writer.writeln();

        writer.writeln('public static createInstance():%s', classInfo.className);
        writer.startBlock();
        writer.writeln('return <%s>(%s.UIPackage.createObject("%s", "%s"));', classInfo.className, ns, handler.pkg.name, classInfo.resName);
        writer.endBlock();
        writer.writeln();

        writer.writeln('protected onConstruct():void');
        writer.startBlock();
        for (let j: number = 0; j < memberCnt; j++) {
            let memberInfo = members.get_Item(j);
            if (memberInfo.group == 0) {
                if (getMemberByName)
                    writer.writeln('this.%s = <%s>(this.getChild("%s"));', memberInfo.varName, memberInfo.type, memberInfo.name);
                else
                    writer.writeln('this.%s = <%s>(this.getChildAt(%s));', memberInfo.varName, memberInfo.type, memberInfo.index);
            }
            else if (memberInfo.group == 1) {
                if (getMemberByName)
                    writer.writeln('this.%s = this.getController("%s");', memberInfo.varName, memberInfo.name);
                else
                    writer.writeln('this.%s = this.getControllerAt(%s);', memberInfo.varName, memberInfo.index);
            }
            else {
                if (getMemberByName)
                    writer.writeln('this.%s = this.getTransition("%s");', memberInfo.varName, memberInfo.name);
                else
                    writer.writeln('this.%s = this.getTransitionAt(%s);', memberInfo.varName, memberInfo.index);
            }
        }
        writer.endBlock();

        console.log("item name : " + classInfo.resName);
        console.log("classInfo res item desc : " + handler.GetItemDesc(classInfo.res));

        let desc:any = handler.GetItemDesc(classInfo.res);
        
        if(desc != null)
        {
            console.log(typeof desc);
            let hasLang:boolean = false;
            if(typeof desc === 'object')
            {
                let lang_obj = {};

                for(let a = 0; a < (desc as FairyGUI.Utils.XML).elements.rawList.Count; a ++)
                {
                    let elements:FairyGUI.Utils.XMLList = (desc as FairyGUI.Utils.XML).elements.rawList.get_Item(a).elements;
                    console.log("elements Count : " + elements.Count);
    
                    for(let b = 0; b < elements.Count; b ++)
                    {
                        let element:FairyGUI.Utils.XML = elements.rawList.get_Item(b);
    
                        if(element.name == "text" && element.GetAttribute("customData") != null)
                        {
                            hasLang = true;
                            lang_obj[element.GetAttribute("name")] = {"key" : element.GetAttribute("customData"), "value" : element.GetAttribute("text")}
                            console.log(element.GetAttribute("name"));
                            console.log(element.GetAttribute("customData"));
                        }
                        
                    }
    
                }
                
                if(hasLang)
                {
                    writer.writeln();
                    writer.writeln('private $LANG_INFO = %s;', JSON.stringify(lang_obj));
                    
                    writer.writeln();
                    writer.writeln('private showLang():void');
                    writer.startBlock();
                    writer.endBlock();

                }
                
            }
            else
            {
                console.log(desc);
            }
            // console.log(desc.ToXMLString(false));
        }

        writer.endBlock(); //class

        writer.save(exportCodePath + '/' + classInfo.className + '.ts');
    }

    writer.reset();

    writer.writeln('import * as fgui from "fairygui-cc";');
    writer.writeln();

    let binderName = codePkgName + 'Binder';

    for (let i: number = 0; i < classCnt; i++) {
        let classInfo = classes.get_Item(i);
        writer.writeln('import %s from "./%s";', classInfo.className, classInfo.className);
    }

    if (isThree) {
        writer.writeln('import * as fgui from "fairygui-three";');
        writer.writeln();
    }

    writer.writeln();
    writer.writeln('export default class %s', binderName);
    writer.startBlock();

    writer.writeln('public static bindAll():void');
    writer.startBlock();
    for (let i: number = 0; i < classCnt; i++) {
        let classInfo = classes.get_Item(i);
        writer.writeln('%s.UIObjectFactory.setExtension(%s.URL, %s);', ns, classInfo.className, classInfo.className);
    }
    writer.endBlock(); //bindall

    writer.endBlock(); //class

    writer.save(exportCodePath + '/' + binderName + '.ts');
}

export { genCode };