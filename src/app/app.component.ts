import { Component } from "@angular/core";
import DPlayer from 'dplayer';
import {DPlayerService} from '../../projects/d-player/src/lib/d-player.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public type: number;
  public types = [
    'MP4',
    'HLS',
    'DASH',
    'FLV'
  ];
  public eventLog = [];

  constructor(
    private DPService: DPlayerService
  ) {
    this.type = 0;

    const dp = new DPlayer({
      container: document.getElementById('angular-player'),
      screenshot: true,
      video: {
        url: 'http://red.ipfox.org:8080/live/tigerag_uFZ5wd/3dL1WNjy/2236.m3u8',
        // pic: 'demo.jpg',
        // thumbnails: 'thumbnails.jpg',
      },
      danmaku: {
        id: 'demo',
        api: 'https://api.prprpr.me/dplayer/',
      },
    });
  }

  changeType() {
    if (this.type >= this.types.length - 1) {
      this.type = 0;
    } else {
      this.type++;
    }
  }
}
