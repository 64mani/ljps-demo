import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function () {
      $('.bxslider').bxSlider({
        minSlides: 3,
        maxSlides:3,
        slideWidth:450,
        slideMargin: 10,
        controls: false,
        touchEnabled:false
      });
      
      $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox().destroy();
        $(this).ekkoLightbox();
      });
    
    })
  }

}
