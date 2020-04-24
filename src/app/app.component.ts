import { Component, OnInit } from "@angular/core";
import { EventEmitterService } from "./event-emitter.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular";

  constructor(private eventEmitterService: EventEmitterService) {}

  ngOnInit() {
    const name = "sdssdds";
    EventEmitterService.get(name).emit({ lorem: 123 });
    EventEmitterService.get(name).subscribe(data => {
      console.log(data);
    });
  }
}
