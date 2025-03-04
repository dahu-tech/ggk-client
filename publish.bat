@echo off
: npm包名
set pkg_name=@jh98net/xxyy-core
: 源码所在的目录
set src_dir=%~dp0\assets\xxyy-core
: 目标包发布项目所在的根目录
set dest_dir=D:\xxyy\xxyy.client.core

set curr_dir=%~dp0
call xcopy %src_dir% %dest_dir%\src /E/Y/I/Q
call del %dest_dir%\src\*.meta /F /S /Q

cd %dest_dir%
call npm publish --access public
cd %curr_dir%
call npm install --save %pkg_name%
