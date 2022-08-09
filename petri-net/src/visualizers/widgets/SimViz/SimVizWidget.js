/*globals define, WebGMEGlobal*/

/**
 * Generated by VisualizerGenerator 1.7.0 from webgme on Mon Aug 01 2022 19:13:23 GMT-0400 (Eastern Daylight Time).
 */

define(["jointjs", "css!./styles/SimVizWidget.css"], function (joint) {
  "use strict";
  var WIDGET_CLASS = "sim-viz";
  function SimVizWidget(logger, container) {
    this._logger = logger.fork("Widget");
    this._el = container;
    this.nodes = {};
    this._initialize();
    this._logger.debug("ctor finished");
  }

  SimVizWidget.prototype._initialize = function () {
    joint.shapes.pn.Place = joint.shapes.basic.Generic.define(
      "pn.Place",
      {
        size: { width: 70, height: 70 },
        attrs: {
          ".root": {
            r: 25,
            fill: "#ffffff",
            stroke: "#000000",
            transform: "translate(25, 25)",
          },
          ".label": {
            "text-anchor": "middle",
            "ref-x": 0.5,
            "ref-y": -20,
            ref: ".root",
            fill: "#000000",
            "font-size": 16,
          },
          ".tokens > circle": {
            fill: "#000000",
            r: 2,
          },
          ".tokens.one > circle": { transform: "translate(25, 25)" },

          ".tokens.two > circle:nth-child(1)": {
            transform: "translate(19, 25)",
          },
          ".tokens.two > circle:nth-child(2)": {
            transform: "translate(31, 25)",
          },

          ".tokens.three > circle:nth-child(1)": {
            transform: "translate(18, 29)",
          },
          ".tokens.three > circle:nth-child(2)": {
            transform: "translate(25, 19)",
          },
          ".tokens.three > circle:nth-child(3)": {
            transform: "translate(32, 29)",
          },

          ".tokens.four > circle:nth-child(1)": {
            transform: "translate(32, 18)",
          },
          ".tokens.four > circle:nth-child(2)": {
            transform: "translate(18, 18)",
          },
          ".tokens.four > circle:nth-child(3)": {
            transform: "translate(32, 32)",
          },
          ".tokens.four > circle:nth-child(4)": {
            transform: "translate(18, 32)",
          },

          ".tokens.five > circle:nth-child(1)": {
            transform: "translate(32, 18)",
          },
          ".tokens.five > circle:nth-child(2)": {
            transform: "translate(18, 18)",
          },
          ".tokens.five > circle:nth-child(3)": {
            transform: "translate(32, 32)",
          },
          ".tokens.five > circle:nth-child(4)": {
            transform: "translate(18, 32)",
          },
          ".tokens.five > circle:nth-child(5)": {
            transform: "translate(25, 25)",
          },

          ".tokens.six > circle:nth-child(1)": {
            transform: "translate(18, 16)",
          },
          ".tokens.six > circle:nth-child(2)": {
            transform: "translate(18, 25)",
          },
          ".tokens.six > circle:nth-child(3)": {
            transform: "translate(18, 34)",
          },
          ".tokens.six > circle:nth-child(4)": {
            transform: "translate(32, 16)",
          },
          ".tokens.six > circle:nth-child(5)": {
            transform: "translate(32, 25)",
          },
          ".tokens.six > circle:nth-child(6)": {
            transform: "translate(32, 34)",
          },

          ".tokens.seven > circle:nth-child(1)": {
            transform: "translate(16, 16)",
          },
          ".tokens.seven > circle:nth-child(2)": {
            transform: "translate(16, 25)",
          },
          ".tokens.seven > circle:nth-child(3)": {
            transform: "translate(16, 34)",
          },
          ".tokens.seven > circle:nth-child(4)": {
            transform: "translate(34, 16)",
          },
          ".tokens.seven > circle:nth-child(5)": {
            transform: "translate(34, 25)",
          },
          ".tokens.seven > circle:nth-child(6)": {
            transform: "translate(34, 34)",
          },
          ".tokens.seven > circle:nth-child(7)": {
            transform: "translate(25,25)",
          },

          ".tokens.eight > circle:nth-child(1)": {
            transform: "translate(16, 16)",
          },
          ".tokens.eight > circle:nth-child(2)": {
            transform: "translate(16, 25)",
          },
          ".tokens.eight > circle:nth-child(3)": {
            transform: "translate(16, 34)",
          },
          ".tokens.eight > circle:nth-child(4)": {
            transform: "translate(34, 16)",
          },
          ".tokens.eight > circle:nth-child(5)": {
            transform: "translate(34, 25)",
          },
          ".tokens.eight > circle:nth-child(6)": {
            transform: "translate(34, 34)",
          },
          ".tokens.eight > circle:nth-child(7)": {
            transform: "translate(25,34)",
          },
          ".tokens.eight > circle:nth-child(8)": {
            transform: "translate(25,16)",
          },

          ".tokens.nine > circle:nth-child(1)": {
            transform: "translate(16, 16)",
          },
          ".tokens.nine > circle:nth-child(2)": {
            transform: "translate(16, 25)",
          },
          ".tokens.nine > circle:nth-child(3)": {
            transform: "translate(16, 34)",
          },
          ".tokens.nine > circle:nth-child(4)": {
            transform: "translate(25, 16)",
          },
          ".tokens.nine > circle:nth-child(5)": {
            transform: "translate(25, 25)",
          },
          ".tokens.nine > circle:nth-child(6)": {
            transform: "translate(25, 34)",
          },
          ".tokens.nine > circle:nth-child(7)": {
            transform: "translate(34, 16)",
          },
          ".tokens.nine > circle:nth-child(8)": {
            transform: "translate(34, 25)",
          },
          ".tokens.nine > circle:nth-child(9)": {
            transform: "translate(34, 34)",
          },

          ".tokens.ten > circle:nth-child(1)": {
            transform: "translate(16, 15)",
          },
          ".tokens.ten > circle:nth-child(2)": {
            transform: "translate(16, 24)",
          },
          ".tokens.ten > circle:nth-child(3)": {
            transform: "translate(16, 33)",
          },
          ".tokens.ten > circle:nth-child(4)": {
            transform: "translate(25, 15)",
          },
          ".tokens.ten > circle:nth-child(5)": {
            transform: "translate(25, 24)",
          },
          ".tokens.ten > circle:nth-child(6)": {
            transform: "translate(25, 33)",
          },
          ".tokens.ten > circle:nth-child(7)": {
            transform: "translate(34, 15)",
          },
          ".tokens.ten > circle:nth-child(8)": {
            transform: "translate(34, 24)",
          },
          ".tokens.ten > circle:nth-child(9)": {
            transform: "translate(34, 33)",
          },
          ".tokens.ten > circle:nth-child(10)": {
            transform: "translate(25, 41)",
          },

          ".tokens.eleven > circle:nth-child(1)": {
            transform: "translate(16, 15)",
          },
          ".tokens.eleven > circle:nth-child(2)": {
            transform: "translate(16, 24)",
          },
          ".tokens.eleven > circle:nth-child(3)": {
            transform: "translate(16, 33)",
          },
          ".tokens.eleven > circle:nth-child(4)": {
            transform: "translate(25, 15)",
          },
          ".tokens.eleven > circle:nth-child(5)": {
            transform: "translate(25, 24)",
          },
          ".tokens.eleven > circle:nth-child(6)": {
            transform: "translate(25, 33)",
          },
          ".tokens.eleven > circle:nth-child(7)": {
            transform: "translate(34, 15)",
          },
          ".tokens.eleven > circle:nth-child(8)": {
            transform: "translate(34, 24)",
          },
          ".tokens.eleven > circle:nth-child(9)": {
            transform: "translate(34, 33)",
          },
          ".tokens.eleven > circle:nth-child(10)": {
            transform: "translate(25, 41)",
          },
          ".tokens.eleven > circle:nth-child(11)": {
            transform: "translate(25, 6)",
          },

          ".tokens.twelve > circle:nth-child(1)": {
            transform: "translate(10, 16)",
          },
          ".tokens.twelve > circle:nth-child(2)": {
            transform: "translate(10, 25)",
          },
          ".tokens.twelve > circle:nth-child(3)": {
            transform: "translate(10, 34)",
          },
          ".tokens.twelve > circle:nth-child(4)": {
            transform: "translate(20, 16)",
          },
          ".tokens.twelve > circle:nth-child(5)": {
            transform: "translate(20, 25)",
          },
          ".tokens.twelve > circle:nth-child(6)": {
            transform: "translate(20, 34)",
          },
          ".tokens.twelve > circle:nth-child(7)": {
            transform: "translate(30, 16)",
          },
          ".tokens.twelve > circle:nth-child(8)": {
            transform: "translate(30, 25)",
          },
          ".tokens.twelve > circle:nth-child(9)": {
            transform: "translate(30, 34)",
          },
          ".tokens.twelve > circle:nth-child(10)": {
            transform: "translate(40, 16)",
          },
          ".tokens.twelve > circle:nth-child(11)": {
            transform: "translate(40, 25)",
          },
          ".tokens.twelve > circle:nth-child(12)": {
            transform: "translate(40, 34)",
          },

          ".tokens.alot > text": {
            transform: "translate(25, 18)",
            "text-anchor": "middle",
            fill: "#000000",
          },
        },
      },
      {
        markup:
          '<g class="rotatable"><g class="scalable"><circle class="root"/><g class="tokens" /></g><text class="label"/></g>',
      }
    );

    joint.shapes.pn.PlaceView = joint.dia.ElementView.extend({
      presentationAttributes: joint.dia.ElementView.addPresentationAttributes({
        tokens: ["TOKENS"],
      }),
      initFlag: joint.dia.ElementView.prototype.initFlag.concat(["TOKENS"]),

      confirmUpdate: function (...args) {
        let flags = joint.dia.ElementView.prototype.confirmUpdate.call(
          this,
          ...args
        );
        if (this.hasFlag(flags, "TOKENS")) {
          this.renderTokens();
          this.update();
          flags = this.removeFlag(flags, "TOKENS");
        }
        return flags;
      },

      renderTokens: function () {
        const vTokens = this.vel.findOne(".tokens").empty();
        let nums = {
          1: "one",
          2: "two",
          3: "three",
          4: "four",
          5: "five",
          6: "six",
          7: "seven",
          8: "eight",
          9: "nine",
          10: "ten",
          11: "eleven",
          12: "twelve",
        };
        Object.keys(nums).forEach((n) => {
          vTokens.removeClass(nums[n]);
        });
        vTokens.removeClass("alot");

        console.log(Array(2).fill(joint.V("circle")));

        var tokens = this.model.get("tokens");
        if (!tokens) return;

        if (tokens <= 12) {
          console.log(`tokens: ${tokens}`);
          vTokens.addClass(nums[tokens]);
          if (tokens == 1) {
            vTokens.append(joint.V("circle"));
          } else {
            let circles = [];
            for (var i = 0; i < tokens; i++) {
              circles.push(joint.V("circle"));
            }
            vTokens.append(circles);
          }
        } else {
          vTokens.addClass("alot");
          vTokens.append(joint.V("text").text(`${tokens}`));
        }
      },
    });

    joint.shapes.pn.TransitionView = joint.dia.ElementView.extend({
      /* Custom TransitionView to enable dynamic rendering based on enabled status */
      presentationAttributes: joint.dia.ElementView.addPresentationAttributes({
        enabled: ["ENABLED"],
      }),
      initFlag: joint.dia.ElementView.prototype.initFlag.concat(["ENABLED"]),

      confirmUpdate: function (...args) {
        let flags = joint.dia.ElementView.prototype.confirmUpdate.call(
          this,
          ...args
        );
        if (this.hasFlag(flags, "ENABLED")) {
          this.renderStatus();
          this.update();
          flags = this.removeFlag(flags, "ENABLED");
        }
        return flags;
      },
      renderStatus: function () {
        let ENABLED_CLASS = "enabled-pulsate";
        let root = this.vel.findOne(".root");
        let label = this.vel.findOne(".label");
        let transitionName = this.model.get("name");
        var enabled = this.model.get("enabled");
        if (enabled) {
          label
            .text(`ENABLED: ${transitionName}`)
            .addClass("enabled")
            .removeClass("disabled");
          root.addClass(ENABLED_CLASS);
        } else {
          label
            .text(`DISABLED: ${transitionName}`)
            .removeClass("enabled")
            .addClass("disabled");
          root.removeClass(ENABLED_CLASS);
        }
      },
    });

    var width = this._el.width(),
      height = this._el.height(),
      self = this;

    // set widget class
    self._el.addClass(WIDGET_CLASS);
    const namespace = joint.shapes;
    // initialize Joint JS petrinet
    self._jointPetriNet = new joint.dia.Graph({}, { cellNamespace: namespace });
    self._jointPaper = new joint.dia.Paper({
      el: self._el,
      width: width,
      height: height,
      gridSize: 10,
      model: self._jointPetriNet,
      defaultAnchor: { name: "perpendicular" },
      defaultConnectionPoint: { name: "boundary" },
      cellViewNamespace: namespace,
    });

    // add event calls to elements
    self._jointPaper.on("element:pointerdblclick", function (elementView) {
      //FIXME: current should be current marking, representative of all places in PN.
      // const currentElement = elementView.model;
      // if (self._webgmePetriNet) {
      //   self._setCurrentState(self._webgmePetriNet.id2state[currentElement.id]);
      // }
      // set current marking maybe?
    });

    // Create a dummy header
    self._el.append("<h3>SimViz Events:</h3>");

    // Registering to events can be done with jQuery (as normal)
    self._el.on("dblclick", function (event) {
      event.stopPropagation();
      event.preventDefault();
      self.onBackgroundDblClick();
    });
  };

  SimVizWidget.prototype.onWidgetContainerResize = function (width, height) {
    this._logger.debug("Widget is resizing...");
  };

  // Adding/Removing/Updating items
  SimVizWidget.prototype.addNode = function (desc) {
    if (desc) {
      // Add node to a table of nodes
      var node = document.createElement("div"),
        label = "children";

      if (desc.childrenIds.length === 1) {
        label = "child";
      }

      this.nodes[desc.id] = desc;
      node.innerHTML =
        'Adding node "' +
        desc.name +
        '" (click to view). It has ' +
        desc.childrenIds.length +
        " " +
        label +
        ".";

      // TODO conditional class additions of each node here for transition and places

      this._el.append(node);
      node.onclick = this.onNodeClick.bind(this, desc.id);
    }
  };

  SimVizWidget.prototype.removeNode = function (gmeId) {
    var desc = this.nodes[gmeId];
    this._el.append('<div>Removing node "' + desc.name + '"</div>');
    delete this.nodes[gmeId];
  };

  SimVizWidget.prototype.updateNode = function (desc) {
    if (desc) {
      this._logger.debug("Updating node:", desc);
      this._el.append('<div>Updating node "' + desc.name + '"</div>');
    }
  };

  SimVizWidget.prototype.initializePlaceVertices = function () {
    /* create a Circle vertex for each place using Joint JS; create an object
    mapping the joint vertex ids back to the place ids and set
    petriNet.id2place as that object.
    also set each place.joint (petriNet.places[pid1,pid2,...].joint)
    to respective joint vertex
    */
    let self = this;
    console.log("initializing place vertices");
    self._webgmePetriNet.id2place = {
      /* map on-screen ids to place ids */
    };
    Object.keys(self._webgmePetriNet.places).forEach((placeId) => {
      let place = self._webgmePetriNet.places[placeId];
      console.log(`adding place vertex with tokens = ${place.currentMarking}`);
      let vertex = new joint.shapes.pn.Place({
        position: place.position,
        size: { width: 80, height: 80 },
        attrs: {
          ".label": {
            text: self._webgmePetriNet.places[placeId].name,
            fill: "black",
          },
          ".root": {
            stroke: "black",
            strokeWidth: 3,
          },
          ".tokens > circle": {
            fill: "#7a7e9b",
          },
        },
        tokens: place.currentMarking,
      });
      console.log(vertex);
      self._jointPetriNet.addCell([vertex]);
      self._webgmePetriNet.places[placeId].joint = vertex;
      self._webgmePetriNet.id2place[vertex.id] = placeId;
    });
  };

  SimVizWidget.prototype.initializeTransitionVertices = function () {
    /* create a white square vertex for each transition using Joint JS; create an object
    mapping the joint vertex ids back to the transition ids and set
    petriNet.id2transition as that object.
    also set each transition.joint (petriNet.transitions[tid1,tid2,...].joint)
    to respective joint vertex
    */
    let self = this;
    console.log("initializing transition vertices");
    self._webgmePetriNet.id2transition = {
      /* map on-screen ids to place ids */
    };
    Object.keys(self._webgmePetriNet.transitions).forEach((transitionId) => {
      let transition = self._webgmePetriNet.transitions[transitionId];
      let vertex = new joint.shapes.pn.Transition({
        name: transition.name,
        position: transition.position,
        size: { width: 50, height: 50 },
        attrs: {
          ".label": {
            text: transition.name,
            "text-anchor": "middle",
            "ref-x": 0.5,
            "ref-y": -20,
            ref: ".root",
            fontSize: 18,
          },
          ".label.enabled": {
            fill: "green",
            stroke: "green",
          },
          ".label.disabled": {
            fill: "#777777",
            stroke: "#777777",
          },
          ".root": {
            fill: "#777777",
            stroke: "#777777",
          },
          ".root.enabled-pulsate": {
            stroke: "green",
            fill: "white",
          },
        },
      });
      vertex.addTo(self._jointPetriNet);
      self._webgmePetriNet.transitions[transitionId].joint = vertex;
      self._webgmePetriNet.id2transition[vertex.id] = transitionId;
    });
  };
  SimVizWidget.prototype.updateTransitionEnabledStatuses = function () {
    console.log("Now updating transition enabled statuses");
    /* call this after full graph is created */
    let self = this;
    let enabledTransitions = [];
    Object.keys(self._webgmePetriNet.transitions).forEach((tid) => {
      let transition = self._webgmePetriNet.transitions[tid];
      let fireable = transitionIsFireable(self, transition.joint);
      transition.joint.set("enabled", fireable);
      if (fireable) {
        enabledTransitions.push(transition);
      }
    });
    console.log(
      "enabled transitions before setFireableeevents(enabledTransitions)"
    );
    console.log(enabledTransitions);
    // updates the toolbar dropdown with specific fireable transitions
    self._webgmePetriNet.setFireableEvents(enabledTransitions);
  };

  SimVizWidget.prototype.initializeArcs = function (arcType) {
    let self = this;
    let createJointLink = (a, b, name) => {
      return new joint.shapes.standard.Link({
        // need to use the joint ids from the actual place and trans ids
        source: { id: a.id },
        target: { id: b.id },
        attrs: {
          line: {
            strokeWidth: 2,
          },
          wrapper: {
            cursor: "default",
          },
        },
        labels: [
          {
            position: {
              distance: 0.5,
              offset: 0,
              args: {
                keepGradient: true,
                ensureLegibility: true,
              },
            },
            attrs: {
              text: {
                text: name,
                fontWeight: "bold",
              },
            },
          },
        ],
      });
    };
    let arcsArray =
      arcType === "ArcPlaceToTransition"
        ? self._webgmePetriNet.arcsPlaceToTransition
        : self._webgmePetriNet.arcsTransitionToPlace;
    arcsArray.forEach((arc) => {
      let src =
        arcType === "ArcPlaceToTransition"
          ? self._webgmePetriNet.places[arc.src]
          : self._webgmePetriNet.transitions[arc.src];
      let dst =
        arcType === "ArcPlaceToTransition"
          ? self._webgmePetriNet.transitions[arc.dst]
          : self._webgmePetriNet.places[arc.dst];
      src.jointOutArcs = src.jointOutArcs || {};
      console.log(`creating a link from src=${src.id} to dst=${dst.id}`);
      let link = createJointLink(src.joint, dst.joint, arc.name);
      link.addTo(self._jointPetriNet);
      src.jointOutArcs[arc.id] = link;
    });
  };

  // State Machine manipulating functions called from the controller
  SimVizWidget.prototype.initMachine = function (petriNetDescriptor) {
    const self = this;
    self._webgmePetriNet = petriNetDescriptor;
    self._jointPetriNet.clear();
    self.initializePlaceVertices();
    self.initializeTransitionVertices();
    ["ArcPlaceToTransition", "ArcTransitionToPlace"].forEach((arcType) => {
      self.initializeArcs(arcType);
    });

    //now refresh the visualization
    self._jointPaper.updateViews();
    self._decorateMachine();
  };

  SimVizWidget.prototype.destroyMachine = function () {};

  let transitionIsFireable = (self, t, placesBefore = null) => {
    if (!placesBefore) {
      var inbound = self._jointPetriNet.getConnectedLinks(t, {
        inbound: true,
      });
      var placesBefore = inbound.map(function (link) {
        return link.getSourceElement();
      });
    }
    var isFirable = true;
    console.log("looping over placesBefore:");
    placesBefore.forEach(function (p) {
      let tokens = p.get("tokens");
      console.log(`p tokens = ${tokens}`);
      if (p.get("tokens") === 0) {
        isFirable = false;
      }
    });
    return isFirable;
  };

  SimVizWidget.prototype.fireEvent = function (transition = null) {
    // event is the string "FIRE"
    let self = this;

    /* reference: https://github.com/clientIO/joint/blob/master/demo/petri%20nets/src/pn.js#L14 */

    let fireTransition = (t, sec, self) => {
      var inbound = self._jointPetriNet.getConnectedLinks(t, { inbound: true });
      var outbound = self._jointPetriNet.getConnectedLinks(t, {
        outbound: true,
      });
      var placesBefore = inbound.map(function (link) {
        return link.getSourceElement();
      });
      var placesAfter = outbound.map(function (link) {
        return link.getTargetElement();
      });

      if (transitionIsFireable(self, t, placesBefore)) {
        let TOKEN_COLOR = "#ff0000";
        let TOKEN_RADIUS = 10;
        placesBefore.forEach(function (p) {
          // Let the execution finish before adjusting the value of tokens. So that we can loop over all transitions
          // and call fireTransition() on the original number of tokens.
          setTimeout(function () {
            p.set("tokens", p.get("tokens") - 1);
          }, 0);

          var links = inbound.filter(function (l) {
            return l.getSourceElement() === p;
          });

          links.forEach(function (l) {
            var token = joint.V("circle", {
              r: TOKEN_RADIUS,
              fill: TOKEN_COLOR,
            });
            l.findView(self._jointPaper).sendToken(token, sec * 1000);
          });
        });

        placesAfter.forEach(function (p) {
          var links = outbound.filter(function (l) {
            return l.getTargetElement() === p;
          });

          links.forEach(function (l) {
            var token = joint.V("circle", {
              r: TOKEN_RADIUS,
              fill: TOKEN_COLOR,
            });
            l.findView(self._jointPaper).sendToken(
              token,
              sec * 1000,
              function () {
                p.set("tokens", p.get("tokens") + 1);
              }
            );
          });
        });
      }
    };

    let fireAllEnabledTransitions = (self) => {
      // attempt fire on all transitions.
      Object.keys(self._webgmePetriNet.transitions).forEach((tid) => {
        fireTransition(self._webgmePetriNet.transitions[tid].joint, 1, self);
      });
    };
    if (this._webgmePetriNet.deadlockActive(self._webgmePetriNet)) {
      this._client.sendMessageToPlugin(
        "PetriNetClassifier",
        "DEADLOCK_MSG",
        "Deadlock has been reached"
      );
    } else {
      if (!transition) {
        fireAllEnabledTransitions(self);
      } else {
        // one transition clicked
        fireTransition(transition.joint, 1, self);
      }
      setTimeout(() => {
        // update the decoration to indicate fireable/enabled transitions
        self._decorateMachine();
      }, 1250);
    }
  };

  SimVizWidget.prototype.resetMachine = function () {
    this.initMachine(this._webgmePetriNet);
  };

  SimVizWidget.prototype._decorateMachine = function () {
    let self = this;
    self.updateTransitionEnabledStatuses();
  };
  /* * * * * * * * Visualizer event handlers * * * * * * * */

  SimVizWidget.prototype.onNodeClick = function (/*id*/) {
    // This currently changes the active node to the given id and
    // this is overridden in the controller.
  };

  SimVizWidget.prototype.onBackgroundDblClick = function () {
    this._el.append("<div>Background was double-clicked!!</div>");
  };

  /* * * * * * * * Visualizer life cycle callbacks * * * * * * * */
  SimVizWidget.prototype.destroy = function () {};

  SimVizWidget.prototype.onActivate = function () {
    this._logger.debug("SimVizWidget has been activated");
  };

  SimVizWidget.prototype.onDeactivate = function () {
    this._logger.debug("SimVizWidget has been deactivated");
  };

  return SimVizWidget;
});
