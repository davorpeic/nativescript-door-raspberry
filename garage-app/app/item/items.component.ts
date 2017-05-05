import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    constructor(private itemService: ItemService, private http: Http) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    openDoor(){
        console.log("Opening...");
        this.http.get("http://192.168.0.15/garageDoor/?trigger=1").map(res => res.json()).subscribe((response: any) => {

        });
    }
}
