export class EventData {
  event: string;
  listener: (event: string, args: any) => void;
  thisObj: any;
}
