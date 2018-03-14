import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-assembly',
  templateUrl: './assembly.component.html',
  styleUrls: ['./assembly.component.css']
})
export class AssemblyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.bxslider_assembly').bxSlider({
        minSlides: 3,
        maxSlides:3,
        slideWidth:450,
        slideMargin: 10,
        controls: false,
        touchEnabled:false
      });
      
      $(document).on('click', '[data-toggle="lightbox_assembly"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox().destroy();
        $(this).ekkoLightbox();
      });
     
    })
  }

}
