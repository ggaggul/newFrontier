/**
 * Created by 1003836 on 2017. 7. 14..
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import 'jquery-slimscroll';

declare var jQuery:any;

@Component ({
    selector : 'navigation',
    template : require('./navigation.template.html')
})

export class NavigationComponent {
    constructor(private router : Router){}

    ngAfterViewInit(){
        jQuery('#side-menu').metisMenu();
        if (jQuery("body").hasClass('fixed-sidebar')) {
            jQuery('.sidebar-collapse').slimscroll({
                height: '100%'
            })
        }
    }

    activeRoute(routename: string): boolean{
        return this.router.url.indexOf(routename) > -1;
    }
}