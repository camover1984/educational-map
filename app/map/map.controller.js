(function(window, angular, undefined) {

  angular.module('map')
  .controller('mapCtrl', ['NgMap', 'cameraService', '$window',
    function(NgMap, cameraService, $window) {

    var vm = this;
      // jank list
    vm.cameras = [
{
    "_id": {
        "$oid": "585c30434da5bfb41e84ab0f"
    },
    "username": "papa foucault",
    "position": [
        "35.5942",
        "-82.5544"
    ],
    "rating": null,
    "info": "points across parking lot towards construction site",
    "voted": [
        "papa foucault"
    ]
},
{
    "_id": {
        "$oid": "585c306e4da5bfb41e84ab10"
    },
    "username": "papa foucault",
    "position": [
        "35.5943",
        "-82.5539"
    ],
    "rating": null,
    "info": "two in proximity. \"building under surviellence\" sign",
    "voted": [
        "papa foucault"
    ]
},
      {
    "_id": {
        "$oid": "585c30c64da5bfb41e84ab11"
    },
    "username": "papa foucault",
    "position": [
        "35.5947",
        "-82.5539"
    ],
    "rating": null,
    "info": "looking east on patton",
    "voted": [
        "papa foucault"
    ]
},
{
    "_id": {
        "$oid": "585c30f64da5bfb41e84ab12"
    },
    "username": "papa foucault",
    "position": [
        "35.5945",
        "-82.5536"
    ],
    "rating": null,
    "info": "looking down church st.",
    "voted": [
        "papa foucault"
    ]
},
      {
    "_id": {
        "$oid": "585c30ff4da5bfb41e84ab13"
    },
    "username": "papa foucault",
    "position": [
        "35.5946",
        "-82.5537"
    ],
    "rating": null,
    "info": "two looking down patton",
    "voted": [
        "papa foucault"
    ]
},
 {
    "_id": {
        "$oid": "585c312a4da5bfb41e84ab14"
    },
    "username": "papa foucault",
    "position": [
        "35.5950",
        "-82.5523"
    ],
    "rating": null,
    "info": "up top. muti-directional.",
    "voted": [
        "papa foucault"
    ]
},
      {
    "_id": {
        "$oid": "585c313e4da5bfb41e84ab15"
    },
    "username": "papa foucault",
    "position": [
        "35.5953",
        "-82.5524"
    ],
    "rating": null,
    "info": "up top. muti-directional.",
    "voted": [
        "papa foucault"
    ]
},
      {
    "_id": {
        "$oid": "585c31444da5bfb41e84ab16"
    },
    "username": "papa foucault",
    "position": [
        "35.5954",
        "-82.5521"
    ],
    "rating": null,
    "info": "up top. muti-directional.",
    "voted": [
        "papa foucault"
    ]
},
      {
    "_id": {
        "$oid": "585c31484da5bfb41e84ab17"
    },
    "username": "papa foucault",
    "position": [
        "35.5951",
        "-82.5520"
    ],
    "rating": null,
    "info": "up top. muti-directional.",
    "voted": [
        "papa foucault"
    ]
},
      {
    "_id": {
        "$oid": "585c31614da5bfb41e84ab18"
    },
    "username": "papa foucault",
    "position": [
        "35.5952",
        "-82.5517"
    ],
    "rating": null,
    "info": "top of building",
    "voted": [
        "papa foucault"
    ]
},
      {
    "_id": {
        "$oid": "585c316b4da5bfb41e84ab19"
    },
    "username": "papa foucault",
    "position": [
        "35.5954",
        "-82.5518"
    ],
    "rating": null,
    "info": "top of building",
    "voted": [
        "papa foucault"
    ]
},
      {
    "_id": {
        "$oid": "585c31934da5bfb41e84ab1a"
    },
    "username": "papa foucault",
    "position": [
        "35.5956",
        "-82.5509"
    ],
    "rating": null,
    "info": "top of building. maybe some closer to ground level under awning. \"under surveillance\" sign.",
    "voted": [
        "papa foucault"
    ]
},
      {
    "_id": {
        "$oid": "585c31aa4da5bfb41e84ab1b"
    },
    "username": "papa foucault",
    "position": [
        "35.5954",
        "-82.5502"
    ],
    "rating": null,
    "info": "two under/inside terrace.",
    "voted": [
        "papa foucault"
    ]
},
      {
    "_id": {
        "$oid": "585c31c74da5bfb41e84ab1c"
    },
    "username": "papa foucault",
    "position": [
        "35.5940",
        "-82.5493"
    ],
    "rating": null,
    "info": "cameras on/around church. not sure on the range.",
    "voted": [
        "papa foucault"
    ]
},
      {
    "_id": {
        "$oid": "585c31ff4da5bfb41e84ab1d"
    },
    "username": "papa foucault",
    "position": [
        "35.5976",
        "-82.5472"
    ],
    "rating": null,
    "info": "multi-directional on/around bank facing government buildings.",
    "voted": [
        "papa foucault"
    ]
},
      {
    "_id": {
        "$oid": "585c328c4da5bfb41e84ab1e"
    },
    "username": "papa foucault",
    "position": [
        "35.5967",
        "-82.5515"
    ],
    "rating": null,
    "info": "multiple on building along walnut st.",
    "voted": [
        "papa foucault"
    ]
},
      {
    "_id": {
        "$oid": "585c32924da5bfb41e84ab1f"
    },
    "username": "papa foucault",
    "position": [
        "35.5966",
        "-82.5519"
    ],
    "rating": null,
    "info": "multiple on building along walnut st.",
    "voted": [
        "papa foucault"
    ]
},
      {
    "_id": {
        "$oid": "585c32a94da5bfb41e84ab20"
    },
    "username": "papa foucault",
    "position": [
        "35.5963",
        "-82.5516"
    ],
    "rating": null,
    "info": "camera facing fence west across parking lot / alley.",
    "voted": [
        "papa foucault"
    ]
},
      {
    "_id": {
        "$oid": "585c32c24da5bfb41e84ab21"
    },
    "username": "papa foucault",
    "position": [
        "35.5965",
        "-82.5521"
    ],
    "rating": null,
    "info": "camera on corner. kind of humorously blocked by sign.",
    "voted": [
        "papa foucault"
    ]
},
      {
    "_id": {
        "$oid": "585c32da4da5bfb41e84ab22"
    },
    "username": "papa foucault",
    "position": [
        "35.5966",
        "-82.5512"
    ],
    "rating": null,
    "info": "multiple cameras along building",
    "voted": [
        "papa foucault"
    ]
},
      {
    "_id": {
        "$oid": "585c32ed4da5bfb41e84ab23"
    },
    "username": "papa foucault",
    "position": [
        "35.5978",
        "-82.5519"
    ],
    "rating": null,
    "info": "cameras in alley",
    "voted": [
        "papa foucault"
    ]
},
      {
    "_id": {
        "$oid": "585c32f74da5bfb41e84ab24"
    },
    "username": "papa foucault",
    "position": [
        "35.5980",
        "-82.5520"
    ],
    "rating": null,
    "info": "cameras in alley",
    "voted": [
        "papa foucault"
    ]
},
      {
    "_id": {
        "$oid": "585c33204da5bfb41e84ab25"
    },
    "username": "papa foucault",
    "position": [
        "35.5983",
        "-82.5520"
    ],
    "rating": null,
    "info": "camera facing west on woodfin st. looking over alley entrance.",
    "voted": [
        "papa foucault"
    ]
}
      
      
      
      
    ];

    // Display map
    NgMap.getMap().then(function(map) {
      vm.map = map;
    });


    // Populate map with cameras
//     cameraService.getCameras().then(function(data) {
//       vm.cameras.push(data);
//     });

// end list
      
      
    // Show info window on click
    vm.showDetail = function(e, camera) {
      vm.camera = camera;
      vm.map.showInfoWindow('camera', this);
    };

    // Open info window upon click
    vm.placeCamera = function(e) {
      vm.map.showInfoWindow('newCamera', e.latLng);
      vm.lat = e.latLng.lat();
      vm.lng = e.latLng.lng();

    }

    // Allow user to add camera to map
    vm.createNewCamera = function(e) {
      var cameraData = {
        location: [vm.lat, vm.lng],
        info: vm.formData.info,
        rating: 0,
      };
      console.log(cameraData);

      cameraService.postCamera(cameraData)
        .then(function(data) {
          console.log('camera posted');
        })
        .catch(function(data) {
          console.error('error: ' + data);
        });

      vm.lat, vm.lng = 0;
      vm.formData = "";
    }


    // Vote on camera
    vm.voteUp = function(e, camera) {
      vm.camera.votes += 1;
      console.log(vm.camera.votes);
      cameraService.vote(vm.camera).then(function(data) {
        console.log(data);
      });
    }

    vm.voteDown = function() {
      vm.camera.votes -= 1;
      console.log(vm.camera.votes);
      cameraService.vote(vm.camera).then(function(data) {
        console.log(data);
      });
    }


  }])

})(window, window.angular);
