import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-registartion",
  templateUrl: "./registartion.component.html",
  styleUrls: ["./registartion.component.css"]
})
export class RegistartionComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}
  home() {
    this.router.navigate(["./home"]);
  }
  moveToLogin() {
    this.router.navigate(["./public"]);
  }
}
