(() => {
    var e = {
            66514: function(e, t, a) {
                a(9461), a(27624), a(30286), a(8334), a(12338), a(93695), a(60322), a(40941), a(65134), a(79858), a(82444), a(41655), a(64054), a(84345), a(69078), a(23973), a(12458), a(38959)
            },
            38959: function() {
                function e() {
                    let e = Webflow.require("ix3");
                    e.ready().then(() => {
                        let t = e.getInstance();
                        t && (t.register([{
                            id: "i-ba774b0f",
                            scope: {
                                type: "site"
                            },
                            triggers: [
                                ["wf:hover", {
                                        control: "reverse",
                                        controlType: "standard",
                                        pluginConfig: {
                                            type: "mouseleave",
                                            hover: "each"
                                        }
                                    },
                                    ["wf:class", [""], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                ["wf:hover", {
                                        controlType: "standard",
                                        pluginConfig: {
                                            type: "mouseenter",
                                            hover: "each"
                                        }
                                    },
                                    ["wf:class", [""], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-e68cb662"],
                            deleted: !1
                        }, {
                            id: "i-8ef4fe6e",
                            scope: {
                                type: "site"
                            },
                            triggers: [
                                ["wf:scroll", {
                                        controlType: "scroll",
                                        scrollTriggerConfig: {
                                            clamp: !1,
                                            start: "top 90%",
                                            end: "bottom top",
                                            scrub: null,
                                            enter: "play",
                                            leave: "none",
                                            enterBack: "none",
                                            leaveBack: "none"
                                        }
                                    },
                                    ["wf:attribute", "[section]", {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-87da1dfd"],
                            deleted: !1
                        }, {
                            id: "i-4b162df1",
                            scope: {
                                type: "site"
                            },
                            triggers: [
                                ["wf:load", {
                                    control: "play",
                                    controlType: "load"
                                }]
                            ],
                            timelineIds: ["t-cc9dde34"],
                            deleted: !1
                        }, {
                            id: "i-6b7277e2",
                            scope: {
                                type: "site"
                            },
                            triggers: [
                                ["wf:load", {
                                    control: "play",
                                    controlType: "load"
                                }]
                            ],
                            timelineIds: ["t-24fa872e"],
                            deleted: !1
                        }, {
                            id: "i-9e840348",
                            scope: {
                                type: "site"
                            },
                            triggers: [
                                ["wf:load", {
                                    control: "play",
                                    controlType: "load"
                                }]
                            ],
                            timelineIds: ["t-9af6b872"],
                            deleted: !1
                        }, {
                            id: "i-94acc0ff",
                            scope: {
                                type: "site"
                            },
                            triggers: [
                                ["wf:scroll", {
                                        controlType: "scroll",
                                        scrollTriggerConfig: {
                                            clamp: !1,
                                            start: "top bottom",
                                            end: "bottom top",
                                            scrub: null,
                                            enter: "play",
                                            leave: "none",
                                            enterBack: "none",
                                            leaveBack: "none"
                                        }
                                    },
                                    ["wf:attribute", "[box]", {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-3f774bd3"],
                            deleted: !1
                        }, {
                            id: "i-7058f79b",
                            scope: {
                                type: "site"
                            },
                            triggers: [
                                ["wf:hover", {
                                        controlType: "standard"
                                    },
                                    ["wf:class", ["service-card"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                ["wf:hover", {
                                        control: "reverse",
                                        controlType: "standard",
                                        pluginConfig: {
                                            type: "mouseleave",
                                            hover: "each"
                                        }
                                    },
                                    ["wf:class", ["service-card"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-86977155"],
                            deleted: !1
                        }, {
                            id: "i-082574b7",
                            scope: {
                                type: "site"
                            },
                            triggers: [
                                ["wf:load", {
                                    control: "play",
                                    controlType: "load"
                                }]
                            ],
                            timelineIds: ["t-aa0e1ad3"],
                            deleted: !1
                        }, {
                            id: "i-d02055eb",
                            scope: {
                                type: "site"
                            },
                            triggers: [
                                ["wf:load", {
                                    control: "play",
                                    controlType: "load"
                                }]
                            ],
                            timelineIds: ["t-7ff0f842"],
                            deleted: !1
                        }, {
                            id: "i-1d244972",
                            scope: {
                                type: "site"
                            },
                            triggers: [
                                ["wf:hover", {
                                        controlType: "standard"
                                    },
                                    ["wf:class", ["primary-button"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                ["wf:hover", {
                                        control: "reverse",
                                        controlType: "standard",
                                        pluginConfig: {
                                            type: "mouseleave",
                                            hover: "each"
                                        }
                                    },
                                    ["wf:class", ["primary-button"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-b7ec4240"],
                            deleted: !1
                        }, {
                            id: "i-2b8ad9e2",
                            scope: {
                                type: "component",
                                componentId: "76e17723-43de-e0c7-8441-8e4f6d3a583b"
                            },
                            triggers: [
                                ["wf:hover", {
                                        controlType: "standard"
                                    },
                                    ["wf:class", ["member-card"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                ["wf:hover", {
                                        control: "reverse",
                                        controlType: "standard",
                                        pluginConfig: {
                                            type: "mouseleave",
                                            hover: "each"
                                        }
                                    },
                                    ["wf:class", ["member-card"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-9a39b29a"],
                            deleted: !1
                        }, {
                            id: "i-d970fdce",
                            scope: {
                                type: "site"
                            },
                            triggers: [
                                ["wf:hover", {
                                        controlType: "standard"
                                    },
                                    ["wf:class", ["blog-item"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                ["wf:hover", {
                                        control: "reverse",
                                        controlType: "standard",
                                        pluginConfig: {
                                            type: "mouseleave",
                                            hover: "each"
                                        }
                                    },
                                    ["wf:class", ["blog-item"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-7b13ea57"],
                            deleted: !1
                        }, {
                            id: "i-8246a121",
                            scope: {
                                type: "component",
                                componentId: "cef18b24-8246-8e2b-8604-80a9d5038b8f"
                            },
                            triggers: [
                                ["wf:hover", {
                                        controlType: "standard"
                                    },
                                    ["wf:class", ["service-item-card"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                ["wf:hover", {
                                        control: "reverse",
                                        controlType: "standard",
                                        pluginConfig: {
                                            type: "mouseleave",
                                            hover: "each"
                                        }
                                    },
                                    ["wf:class", ["service-item-card"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-a9b51037"],
                            deleted: !1
                        }, {
                            id: "i-e44a1db3",
                            scope: {
                                type: "pages",
                                value: ["6a6bdef8f4ecd6b99861485b"]
                            },
                            triggers: [
                                ["wf:hover", {
                                        controlType: "standard"
                                    },
                                    ["wf:class", ["revenue-lightbox"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                ["wf:hover", {
                                        control: "reverse",
                                        controlType: "standard",
                                        pluginConfig: {
                                            type: "mouseleave",
                                            hover: "each"
                                        }
                                    },
                                    ["wf:class", ["revenue-lightbox"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-aa852363"],
                            deleted: !1
                        }, {
                            id: "i-6ef93bee",
                            scope: {
                                type: "pages",
                                value: ["6a6bdef8f4ecd6b99861485b"]
                            },
                            triggers: [
                                ["wf:hover", {
                                        controlType: "standard"
                                    },
                                    ["wf:class", ["check-button"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                ["wf:hover", {
                                        control: "reverse",
                                        controlType: "standard",
                                        pluginConfig: {
                                            type: "mouseleave",
                                            hover: "each"
                                        }
                                    },
                                    ["wf:class", ["check-button"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ]
                            ],
                            timelineIds: ["t-a836256d"],
                            deleted: !1
                        }], [{
                            id: "t-e68cb662",
                            deleted: !1,
                            actions: [{
                                id: "ta-5f6994ab",
                                targets: [
                                    ["wf:selector", "[link-top]", {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: .24,
                                    position: 0,
                                    stagger: {
                                        each: .03
                                    },
                                    ease: 0
                                },
                                properties: {
                                    "wf:transform": {
                                        yPercent: [null, "-100%"]
                                    }
                                },
                                splitText: {
                                    type: "chars"
                                }
                            }, {
                                id: "ta-942084f0",
                                targets: [
                                    ["wf:selector", "[link-bottom]", {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: .24,
                                    position: 0,
                                    stagger: {
                                        each: .03
                                    },
                                    ease: 0
                                },
                                properties: {
                                    "wf:transform": {
                                        yPercent: [null, "-100%"]
                                    }
                                },
                                splitText: {
                                    type: "chars"
                                }
                            }]
                        }, {
                            id: "t-87da1dfd",
                            deleted: !1,
                            actions: [{
                                id: "ta-ee7810be",
                                targets: [
                                    ["wf:any-element", "*", {
                                        relationship: "direct-child-of",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    position: .2,
                                    stagger: {
                                        each: .2
                                    },
                                    ease: 2
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        opacity: ["0%", "100%"],
                                        y: ["70px", "0px"]
                                    }
                                }
                            }]
                        }, {
                            id: "t-cc9dde34",
                            deleted: !1,
                            actions: [{
                                id: "ta-caed3c34",
                                targets: [
                                    ["wf:class", ["performance-icon"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 5,
                                    ease: 0
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        rotation: ["0deg", "360deg"]
                                    }
                                }
                            }],
                            settings: {
                                repeat: -1,
                                yoyo: !1
                            }
                        }, {
                            id: "t-24fa872e",
                            deleted: !1,
                            actions: [{
                                id: "ta-51178e12",
                                targets: [
                                    ["wf:class", ["partner-logos"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 10,
                                    ease: 0
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        x: ["0%", "-100%"]
                                    }
                                }
                            }],
                            settings: {
                                repeat: -1,
                                yoyo: !1
                            }
                        }, {
                            id: "t-9af6b872",
                            deleted: !1,
                            actions: [{
                                id: "ta-ae2341ed",
                                targets: [
                                    ["wf:class", ["case-items"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 20,
                                    ease: 0
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        x: ["0%", "-100%"]
                                    }
                                }
                            }],
                            settings: {
                                repeat: -1,
                                yoyo: !1
                            }
                        }, {
                            id: "t-3f774bd3",
                            deleted: !1,
                            actions: [{
                                id: "ta-2d3cbaf9",
                                targets: [
                                    ["wf:trigger-only", "", {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    position: .2
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        opacity: ["0%", "100%"],
                                        y: ["100px", "0px"]
                                    }
                                }
                            }]
                        }, {
                            id: "t-86977155",
                            deleted: !1,
                            actions: [{
                                id: "ta-4dab0b9c",
                                targets: [
                                    ["wf:class", ["service-image"], {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        scale: [1, 1.1]
                                    }
                                }
                            }, {
                                id: "ta-95a64bba",
                                targets: [
                                    ["wf:class", ["service-name"], {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    position: 0
                                },
                                properties: {
                                    "wf:transform": {},
                                    "wf:style": {
                                        color: [null, "var(--_colors---background-color--hyper-blue)"]
                                    }
                                }
                            }]
                        }, {
                            id: "t-aa0e1ad3",
                            deleted: !1,
                            actions: [{
                                id: "ta-877a4595",
                                targets: [
                                    ["wf:class", ["integration-items"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 15
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        x: ["0%", "-100%"]
                                    }
                                }
                            }],
                            settings: {
                                repeat: -1,
                                yoyo: !1
                            }
                        }, {
                            id: "t-7ff0f842",
                            deleted: !1,
                            actions: [{
                                id: "ta-ea8b5067",
                                targets: [
                                    ["wf:class", ["testimonial-items"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    duration: 40,
                                    ease: 0
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        x: ["0%", "-100%"]
                                    }
                                }
                            }],
                            settings: {
                                repeat: -1,
                                yoyo: !1
                            }
                        }, {
                            id: "t-b7ec4240",
                            deleted: !1,
                            actions: [{
                                id: "ta-3d8cd599",
                                targets: [
                                    ["wf:class", ["button-bg"], {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    position: 0,
                                    ease: 3
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        x: ["-100%", "0%"]
                                    }
                                }
                            }, {
                                id: "ta-373b0a33",
                                targets: [
                                    ["wf:class", ["button-arrows.v1"], {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    position: 0
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        opacity: ["100%", "0%"],
                                        x: ["0%", "100%"]
                                    }
                                }
                            }, {
                                id: "ta-c88fec38",
                                targets: [
                                    ["wf:class", ["button-texts"], {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    position: 0
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        x: ["0rem", "1.4rem"]
                                    }
                                }
                            }, {
                                id: "ta-4c161307",
                                targets: [
                                    ["wf:class", ["button-arrows.v2"], {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    position: 0
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        opacity: ["0%", "100%"],
                                        x: ["-1rem", "0rem"]
                                    }
                                }
                            }]
                        }, {
                            id: "t-9a39b29a",
                            deleted: !1,
                            actions: [{
                                id: "ta-4513c944",
                                targets: [
                                    ["wf:class", ["member-image"], {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        scale: [1, 1.1]
                                    }
                                }
                            }, {
                                id: "ta-58298e78",
                                targets: [
                                    ["wf:class", ["linkedin-icon"], {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    position: 0
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        opacity: ["0%", "100%"]
                                    }
                                }
                            }]
                        }, {
                            id: "t-7b13ea57",
                            deleted: !1,
                            actions: [{
                                id: "ta-3198da1a",
                                targets: [
                                    ["wf:class", ["blog-image"], {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                tt: 0,
                                properties: {
                                    "wf:transform": {
                                        scale: [null, 1.1]
                                    }
                                }
                            }, {
                                id: "ta-82904c45",
                                targets: [
                                    ["wf:class", ["blog-view"], {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    position: 0
                                },
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        opacity: ["0%", "100%"],
                                        scale: [0, 1]
                                    }
                                }
                            }]
                        }, {
                            id: "t-a9b51037",
                            deleted: !1,
                            actions: [{
                                id: "ta-8a2512ab",
                                targets: [
                                    ["wf:class", ["secondary-button.v1"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }],
                                    ["wf:class", ["secondary-arrow.v1"], {
                                        relationship: "none",
                                        firstMatchOnly: !1
                                    }]
                                ],
                                tt: 0,
                                properties: {
                                    "wf:style": {
                                        color: [null, "var(--_colors---background-color--blue-color)"]
                                    }
                                }
                            }]
                        }, {
                            id: "t-aa852363",
                            deleted: !1,
                            actions: [{
                                id: "ta-b5e9f558",
                                targets: [
                                    ["wf:class", ["pause-icon"], {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                tt: 2,
                                properties: {
                                    "wf:transform": {
                                        scale: [1, 1.2]
                                    }
                                }
                            }]
                        }, {
                            id: "t-a836256d",
                            deleted: !1,
                            actions: [{
                                id: "ta-70bfc886",
                                targets: [
                                    ["wf:class", ["check-text"], {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                properties: {
                                    "wf:transform": {},
                                    "wf:style": {
                                        color: [null, "var(--_colors---background-color--black)"]
                                    }
                                }
                            }, {
                                id: "ta-b66f25ff",
                                targets: [
                                    ["wf:class", ["check-arrow"], {
                                        relationship: "within",
                                        filterBy: ["wf:trigger-only", ""],
                                        firstMatchOnly: !1
                                    }]
                                ],
                                timing: {
                                    position: 0
                                },
                                properties: {
                                    "wf:transform": {},
                                    "wf:style": {
                                        color: [null, "var(--_colors---background-color--blue-color)"]
                                    }
                                }
                            }]
                        }]), window.dispatchEvent(new CustomEvent("__wf_ix3_ready")), document.documentElement.classList.add("w-mod-ix3"))
                    })
                }
                Webflow.require("ix2").init({
                    events: {
                        "e-15": {
                            id: "e-15",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-11"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "781eff2d-83ba-11c2-32b0-48d7803f49fd",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "781eff2d-83ba-11c2-32b0-48d7803f49fd",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 100,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x198d1aa2adc
                        },
                        "e-16": {
                            id: "e-16",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "DROPDOWN_OPEN",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-17"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "b5fc85d2-d2d8-6059-1f5c-b2267332e23b",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "b5fc85d2-d2d8-6059-1f5c-b2267332e23b",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19bd7db88ce
                        },
                        "e-17": {
                            id: "e-17",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "DROPDOWN_CLOSE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-9",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-16"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "b5fc85d2-d2d8-6059-1f5c-b2267332e23b",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "b5fc85d2-d2d8-6059-1f5c-b2267332e23b",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19bd7db88ce
                        },
                        "e-22": {
                            id: "e-22",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "NAVBAR_OPEN",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-3",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-23"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "b5fc85d2-d2d8-6059-1f5c-b2267332e232",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "b5fc85d2-d2d8-6059-1f5c-b2267332e232",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c009caa06
                        },
                        "e-23": {
                            id: "e-23",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "NAVBAR_CLOSE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-4",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-22"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "b5fc85d2-d2d8-6059-1f5c-b2267332e232",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "b5fc85d2-d2d8-6059-1f5c-b2267332e232",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c009caa06
                        },
                        "e-24": {
                            id: "e-24",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "MOUSE_OVER",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-7",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-25"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "7696e046-bd75-c8ec-0111-d9f3eb67ff0f",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "7696e046-bd75-c8ec-0111-d9f3eb67ff0f",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c01015445
                        },
                        "e-25": {
                            id: "e-25",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "MOUSE_OUT",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-8",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-24"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "7696e046-bd75-c8ec-0111-d9f3eb67ff0f",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "7696e046-bd75-c8ec-0111-d9f3eb67ff0f",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c01015445
                        },
                        "e-116": {
                            id: "e-116",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_MOVE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                                config: {
                                    actionListId: "a-18",
                                    affectedElements: {},
                                    duration: 0
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6a6bdef8f4ecd6b99861485b|3c1699df-fafa-dfbf-961f-56a05fa0c0ee",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6a6bdef8f4ecd6b99861485b|3c1699df-fafa-dfbf-961f-56a05fa0c0ee",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: [{
                                continuousParameterGroupId: "a-18-p",
                                selectedAxis: "X_AXIS",
                                basedOn: "ELEMENT",
                                reverse: !1,
                                smoothing: 96,
                                restingState: 50
                            }, {
                                continuousParameterGroupId: "a-18-p-2",
                                selectedAxis: "Y_AXIS",
                                basedOn: "ELEMENT",
                                reverse: !1,
                                smoothing: 96,
                                restingState: 50
                            }],
                            createdOn: 0x19c1ad7ea35
                        },
                        "e-189": {
                            id: "e-189",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "TAB_ACTIVE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-28",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-190"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec02",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec02",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c244e1c84
                        },
                        "e-190": {
                            id: "e-190",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "TAB_INACTIVE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-29",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-189"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec02",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec02",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c244e1c84
                        },
                        "e-193": {
                            id: "e-193",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "TAB_ACTIVE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-28",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-194"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec0c",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec0c",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c245c3202
                        },
                        "e-194": {
                            id: "e-194",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "TAB_INACTIVE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-29",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-193"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec0c",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec0c",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c245c3203
                        },
                        "e-195": {
                            id: "e-195",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "TAB_ACTIVE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-28",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-196"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec07",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec07",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c245c6de6
                        },
                        "e-196": {
                            id: "e-196",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "TAB_INACTIVE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-29",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-195"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec07",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec07",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c245c6de7
                        },
                        "e-197": {
                            id: "e-197",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "TAB_ACTIVE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-28",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-198"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec11",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec11",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c245ca5ca
                        },
                        "e-198": {
                            id: "e-198",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "TAB_INACTIVE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-29",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-197"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec11",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec11",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c245ca5cb
                        },
                        "e-199": {
                            id: "e-199",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "TAB_ACTIVE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-28",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-200"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec16",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec16",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c245cd8c1
                        },
                        "e-200": {
                            id: "e-200",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "TAB_INACTIVE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-29",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-199"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec16",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec16",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c245cd8c2
                        },
                        "e-201": {
                            id: "e-201",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "TAB_ACTIVE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-28",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-202"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec1b",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec1b",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c245d13a6
                        },
                        "e-202": {
                            id: "e-202",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "TAB_INACTIVE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-29",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-201"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec1b",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "ba2a6f55-0465-9f28-7b00-607bbd7eec1b",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c245d13a7
                        },
                        "e-220": {
                            id: "e-220",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "DROPDOWN_OPEN",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-31",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-221"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "ded8d3dd-2793-9311-2ce0-f68adce0ff59",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "ded8d3dd-2793-9311-2ce0-f68adce0ff59",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19bcda70d90
                        },
                        "e-221": {
                            id: "e-221",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "DROPDOWN_CLOSE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-32",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-220"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "ded8d3dd-2793-9311-2ce0-f68adce0ff59",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "ded8d3dd-2793-9311-2ce0-f68adce0ff59",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19bcda70d90
                        },
                        "e-225": {
                            id: "e-225",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "DROPDOWN_OPEN",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-33",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-226"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "71c301e0-1475-0135-831e-634711b2fda9",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "71c301e0-1475-0135-831e-634711b2fda9",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c2543a641
                        },
                        "e-226": {
                            id: "e-226",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "DROPDOWN_CLOSE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-34",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-225"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "71c301e0-1475-0135-831e-634711b2fda9",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "71c301e0-1475-0135-831e-634711b2fda9",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c2543a641
                        },
                        "e-227": {
                            id: "e-227",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "NAVBAR_OPEN",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-35",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-228"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "71c301e0-1475-0135-831e-634711b2fda0",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "71c301e0-1475-0135-831e-634711b2fda0",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c2543a641
                        },
                        "e-228": {
                            id: "e-228",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "NAVBAR_CLOSE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-36",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-227"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "71c301e0-1475-0135-831e-634711b2fda0",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "71c301e0-1475-0135-831e-634711b2fda0",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: null,
                                scrollOffsetUnit: null,
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c2543a641
                        },
                        "e-311": {
                            id: "e-311",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-312"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6a6bdef8f4ecd6b99861486a|05c7c65e-a564-5e01-e457-7e2c2442181f",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6a6bdef8f4ecd6b99861486a|05c7c65e-a564-5e01-e457-7e2c2442181f",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 150,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19c276db3b0
                        },
                        "e-405": {
                            id: "e-405",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "MOUSE_MOVE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                                config: {
                                    actionListId: "a-18",
                                    affectedElements: {},
                                    duration: 0
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6a6bdef8f4ecd6b99861486b|3c1699df-fafa-dfbf-961f-56a05fa0c0ee",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6a6bdef8f4ecd6b99861486b|3c1699df-fafa-dfbf-961f-56a05fa0c0ee",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: [{
                                continuousParameterGroupId: "a-18-p",
                                selectedAxis: "X_AXIS",
                                basedOn: "ELEMENT",
                                reverse: !1,
                                smoothing: 96,
                                restingState: 50
                            }, {
                                continuousParameterGroupId: "a-18-p-2",
                                selectedAxis: "Y_AXIS",
                                basedOn: "ELEMENT",
                                reverse: !1,
                                smoothing: 96,
                                restingState: 50
                            }],
                            createdOn: 0x19c27eb90a5
                        },
                        "e-450": {
                            id: "e-450",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-451"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6a6bdef8f4ecd6b998614868|9ecf8374-0fe4-0ef5-0afd-448285b99c95",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6a6bdef8f4ecd6b998614868|9ecf8374-0fe4-0ef5-0afd-448285b99c95",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 150,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19c28507c8f
                        },
                        "e-614": {
                            id: "e-614",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-615"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6a6bdef8f4ecd6b998614865|6978f0292569f69207c1087c00000000000c",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6a6bdef8f4ecd6b998614865|6978f0292569f69207c1087c00000000000c",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 100,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19c33ad1a5d
                        },
                        "e-616": {
                            id: "e-616",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-617"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6a6bdef8f4ecd6b998614865|6978f0292569f69207c1087c000000000096",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6a6bdef8f4ecd6b998614865|6978f0292569f69207c1087c000000000096",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 200,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19c33ad3d5a
                        },
                        "e-618": {
                            id: "e-618",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-619"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6a6bdef8f4ecd6b998614866|6978f0292569f69207c1089200000000000c",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6a6bdef8f4ecd6b998614866|6978f0292569f69207c1089200000000000c",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 100,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19c3453fc78
                        },
                        "e-620": {
                            id: "e-620",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-621"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6a6bdef8f4ecd6b998614866|6978f0292569f69207c10892000000000066",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6a6bdef8f4ecd6b998614866|6978f0292569f69207c10892000000000066",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 200,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19c345431b4
                        },
                        "e-622": {
                            id: "e-622",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-623"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6a6bdef8f4ecd6b998614867|6978f0292569f69207c108a000000000000c",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6a6bdef8f4ecd6b998614867|6978f0292569f69207c108a000000000000c",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 100,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19c345a5b3d
                        },
                        "e-624": {
                            id: "e-624",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-625"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6a6bdef8f4ecd6b998614867|6978f0292569f69207c108a0000000000061",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6a6bdef8f4ecd6b998614867|6978f0292569f69207c108a0000000000061",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 200,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19c345a8e13
                        },
                        "e-698": {
                            id: "e-698",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-699"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6a6bdef8f4ecd6b998614860|7fa5a752-3f39-615b-379e-7e55249c98cb",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6a6bdef8f4ecd6b998614860|7fa5a752-3f39-615b-379e-7e55249c98cb",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 10,
                                scrollOffsetUnit: "%",
                                delay: 100,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19c486095d8
                        },
                        "e-706": {
                            id: "e-706",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-41",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-707"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6a6bdef8f4ecd6b998614871|2f3215d7-a17c-2d72-3fb1-c54b291e869e",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6a6bdef8f4ecd6b998614871|2f3215d7-a17c-2d72-3fb1-c54b291e869e",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !0,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c4890d4ab
                        },
                        "e-708": {
                            id: "e-708",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-41",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-709"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "6a6bdef8f4ecd6b998614863|e486bdf8-0a39-d0b1-e4c8-d14e4e817671",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6a6bdef8f4ecd6b998614863|e486bdf8-0a39-d0b1-e4c8-d14e4e817671",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !0,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c489477bc
                        },
                        "e-712": {
                            id: "e-712",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_START_ACTION",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    actionListId: "a-42",
                                    affectedElements: {},
                                    playInReverse: !1,
                                    autoStopEventId: "e-713"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "52756f57-bc1b-0223-ebd4-b1f34e732224",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "52756f57-bc1b-0223-ebd4-b1f34e732224",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !0,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: null,
                                direction: null,
                                effectIn: null
                            },
                            createdOn: 0x19c4898de8c
                        },
                        "e-714": {
                            id: "e-714",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_MOVE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                                config: {
                                    actionListId: "a-43",
                                    affectedElements: {},
                                    duration: 0
                                }
                            },
                            mediaQueries: ["main", "medium"],
                            target: {
                                id: "6a6bdef8f4ecd6b99861486c|4e37a2a1-0b2d-47ee-ebd7-5d832113c628",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6a6bdef8f4ecd6b99861486c|4e37a2a1-0b2d-47ee-ebd7-5d832113c628",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: [{
                                continuousParameterGroupId: "a-43-p",
                                selectedAxis: "X_AXIS",
                                basedOn: "ELEMENT",
                                reverse: !1,
                                smoothing: 96,
                                restingState: 50
                            }, {
                                continuousParameterGroupId: "a-43-p-2",
                                selectedAxis: "Y_AXIS",
                                basedOn: "ELEMENT",
                                reverse: !1,
                                smoothing: 96,
                                restingState: 50
                            }],
                            createdOn: 0x19c4970e905
                        },
                        "e-715": {
                            id: "e-715",
                            name: "",
                            animationType: "custom",
                            eventTypeId: "MOUSE_MOVE",
                            action: {
                                id: "",
                                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                                config: {
                                    actionListId: "a-43",
                                    affectedElements: {},
                                    duration: 0
                                }
                            },
                            mediaQueries: ["main", "medium"],
                            target: {
                                id: "6a6bdef8f4ecd6b99861486d|6d9146d9-d6a1-96e3-37c9-d76e4642694d",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "6a6bdef8f4ecd6b99861486d|6d9146d9-d6a1-96e3-37c9-d76e4642694d",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: [{
                                continuousParameterGroupId: "a-43-p",
                                selectedAxis: "X_AXIS",
                                basedOn: "ELEMENT",
                                reverse: !1,
                                smoothing: 90,
                                restingState: 50
                            }, {
                                continuousParameterGroupId: "a-43-p-2",
                                selectedAxis: "Y_AXIS",
                                basedOn: "ELEMENT",
                                reverse: !1,
                                smoothing: 50,
                                restingState: 50
                            }],
                            createdOn: 0x19c497519fe
                        },
                        "e-729": {
                            id: "e-729",
                            name: "",
                            animationType: "preset",
                            eventTypeId: "SCROLL_INTO_VIEW",
                            action: {
                                id: "",
                                actionTypeId: "SLIDE_EFFECT",
                                instant: !1,
                                config: {
                                    actionListId: "slideInBottom",
                                    autoStopEventId: "e-730"
                                }
                            },
                            mediaQueries: ["main", "medium", "small", "tiny"],
                            target: {
                                id: "9be58693-2eeb-00f6-cc04-009a2d34854c",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            },
                            targets: [{
                                id: "9be58693-2eeb-00f6-cc04-009a2d34854c",
                                appliesTo: "ELEMENT",
                                styleBlockIds: []
                            }],
                            config: {
                                loop: !1,
                                playInReverse: !1,
                                scrollOffsetValue: 0,
                                scrollOffsetUnit: "%",
                                delay: 400,
                                direction: "BOTTOM",
                                effectIn: !0
                            },
                            createdOn: 0x19d4756c941
                        }
                    },
                    actionLists: {
                        a: {
                            id: "a",
                            title: "Dropdown - Hover In",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-n-2",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dd-navigation",
                                            selectorGuids: ["f03e21fb-203e-ed98-63fd-4cbbc6f78e24"]
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-n-8",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dropdown-arrrow",
                                            selectorGuids: ["fb147e33-86a4-fa94-adf4-ae333c0fcc7c"]
                                        },
                                        globalSwatchId: "--_colors---text-color--soft-stone",
                                        rValue: 197,
                                        bValue: 190,
                                        gValue: 192,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-n-7",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dropdown-arrrow",
                                            selectorGuids: ["fb147e33-86a4-fa94-adf4-ae333c0fcc7c"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-n-5",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dropdown-toggle",
                                            selectorGuids: ["f03e21fb-203e-ed98-63fd-4cbbc6f78e2d"]
                                        },
                                        globalSwatchId: "--_colors---background-color--black",
                                        rValue: 13,
                                        bValue: 13,
                                        gValue: 13,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-n-4",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 400,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dd-navigation",
                                            selectorGuids: ["f03e21fb-203e-ed98-63fd-4cbbc6f78e24"]
                                        },
                                        widthUnit: "PX",
                                        heightUnit: "AUTO",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-n-6",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 400,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dropdown-toggle",
                                            selectorGuids: ["f03e21fb-203e-ed98-63fd-4cbbc6f78e2d"]
                                        },
                                        globalSwatchId: "--_colors---background-color--blue-color",
                                        rValue: 43,
                                        bValue: 255,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-n-9",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 400,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dropdown-arrrow",
                                            selectorGuids: ["fb147e33-86a4-fa94-adf4-ae333c0fcc7c"]
                                        },
                                        globalSwatchId: "--_colors---background-color--blue-color",
                                        rValue: 43,
                                        bValue: 255,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-n-10",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 250,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dropdown-arrrow",
                                            selectorGuids: ["fb147e33-86a4-fa94-adf4-ae333c0fcc7c"]
                                        },
                                        zValue: 180,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19a62cba751
                        },
                        "a-9": {
                            id: "a-9",
                            title: "Dropdown - Hover Out",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-9-n-5",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 400,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dd-navigation",
                                            selectorGuids: ["f03e21fb-203e-ed98-63fd-4cbbc6f78e24"]
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-9-n-6",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 400,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dropdown-toggle",
                                            selectorGuids: ["f03e21fb-203e-ed98-63fd-4cbbc6f78e2d"]
                                        },
                                        globalSwatchId: "--_colors---background-color--black",
                                        rValue: 13,
                                        bValue: 13,
                                        gValue: 13,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-9-n-7",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 400,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dropdown-arrrow",
                                            selectorGuids: ["fb147e33-86a4-fa94-adf4-ae333c0fcc7c"]
                                        },
                                        globalSwatchId: "--_colors---text-color--soft-stone",
                                        rValue: 197,
                                        bValue: 190,
                                        gValue: 192,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-9-n-8",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 250,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dropdown-arrrow",
                                            selectorGuids: ["fb147e33-86a4-fa94-adf4-ae333c0fcc7c"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19a62cba751
                        },
                        "a-3": {
                            id: "a-3",
                            title: "Menu - Open",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-3-n",
                                    actionTypeId: "PLUGIN_LOTTIE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hamburger",
                                            selectorGuids: ["f03e21fb-203e-ed98-63fd-4cbbc6f78e2c"]
                                        },
                                        value: 0
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-3-n-2",
                                    actionTypeId: "PLUGIN_LOTTIE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 400,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hamburger",
                                            selectorGuids: ["f03e21fb-203e-ed98-63fd-4cbbc6f78e2c"]
                                        },
                                        value: 45
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19b30dd4593
                        },
                        "a-4": {
                            id: "a-4",
                            title: "Menu - Close",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-4-n",
                                    actionTypeId: "PLUGIN_LOTTIE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 400,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hamburger",
                                            selectorGuids: ["f03e21fb-203e-ed98-63fd-4cbbc6f78e2c"]
                                        },
                                        value: 0
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b30dd4593
                        },
                        "a-7": {
                            id: "a-7",
                            title: "Back Button [Hover In]",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-7-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-text._01",
                                            selectorGuids: ["491e6aee-b6f8-9b24-7df1-0120482fdaff", "6e7e32a8-c807-f975-be26-11b247c6b3c5"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-7-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-text._02",
                                            selectorGuids: ["491e6aee-b6f8-9b24-7df1-0120482fdaff", "10903e14-78c5-deff-7727-5ce783d818c8"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-7-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-arrow.back-one",
                                            selectorGuids: ["1f849a21-9644-936c-c397-d89d6750ccd4", "af8ec8ce-fab6-03a4-8a09-bdd57f729196"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-7-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-arrow.back-two",
                                            selectorGuids: ["1f849a21-9644-936c-c397-d89d6750ccd4", "4d1372ab-d836-7429-5387-5c3fd679ba48"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-7-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: [.25, .46, .45, .94],
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-text._01",
                                            selectorGuids: ["491e6aee-b6f8-9b24-7df1-0120482fdaff", "6e7e32a8-c807-f975-be26-11b247c6b3c5"]
                                        },
                                        yValue: -100,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-7-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: [.25, .46, .45, .94],
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-arrow.back-two",
                                            selectorGuids: ["1f849a21-9644-936c-c397-d89d6750ccd4", "4d1372ab-d836-7429-5387-5c3fd679ba48"]
                                        },
                                        xValue: -100,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-7-n-7",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: [.25, .46, .45, .94],
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-arrow.back-one",
                                            selectorGuids: ["1f849a21-9644-936c-c397-d89d6750ccd4", "af8ec8ce-fab6-03a4-8a09-bdd57f729196"]
                                        },
                                        xValue: -100,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-7-n-8",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: [.25, .46, .45, .94],
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-text._02",
                                            selectorGuids: ["491e6aee-b6f8-9b24-7df1-0120482fdaff", "10903e14-78c5-deff-7727-5ce783d818c8"]
                                        },
                                        yValue: -100,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19c009384f2
                        },
                        "a-8": {
                            id: "a-8",
                            title: "Back Button [Hover Out]",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-8-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: [.25, .46, .45, .94],
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-text._01",
                                            selectorGuids: ["491e6aee-b6f8-9b24-7df1-0120482fdaff", "6e7e32a8-c807-f975-be26-11b247c6b3c5"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-8-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: [.25, .46, .45, .94],
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-arrow.back-two",
                                            selectorGuids: ["1f849a21-9644-936c-c397-d89d6750ccd4", "4d1372ab-d836-7429-5387-5c3fd679ba48"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-8-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: [.25, .46, .45, .94],
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-arrow.back-one",
                                            selectorGuids: ["1f849a21-9644-936c-c397-d89d6750ccd4", "af8ec8ce-fab6-03a4-8a09-bdd57f729196"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-8-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: [.25, .46, .45, .94],
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".button-text._02",
                                            selectorGuids: ["491e6aee-b6f8-9b24-7df1-0120482fdaff", "10903e14-78c5-deff-7727-5ce783d818c8"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19c009384f2
                        },
                        "a-18": {
                            id: "a-18",
                            title: "Case Mousemove",
                            continuousParameterGroups: [{
                                id: "a-18-p",
                                type: "MOUSE_X",
                                parameterLabel: "Mouse X",
                                continuousActionGroups: [{
                                    keyframe: 0,
                                    actionItems: [{
                                        id: "a-18-n",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".view-block",
                                                selectorGuids: ["8a684f3c-508c-80b8-6a1c-45ca78d8af90"]
                                            },
                                            xValue: -20,
                                            xUnit: "vw",
                                            yUnit: "PX",
                                            zUnit: "PX"
                                        }
                                    }]
                                }, {
                                    keyframe: 100,
                                    actionItems: [{
                                        id: "a-18-n-2",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".view-block",
                                                selectorGuids: ["8a684f3c-508c-80b8-6a1c-45ca78d8af90"]
                                            },
                                            xValue: 20,
                                            xUnit: "vw",
                                            yUnit: "PX",
                                            zUnit: "PX"
                                        }
                                    }]
                                }]
                            }, {
                                id: "a-18-p-2",
                                type: "MOUSE_Y",
                                parameterLabel: "Mouse Y",
                                continuousActionGroups: [{
                                    keyframe: 0,
                                    actionItems: [{
                                        id: "a-18-n-3",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".view-block",
                                                selectorGuids: ["8a684f3c-508c-80b8-6a1c-45ca78d8af90"]
                                            },
                                            yValue: -16,
                                            xUnit: "PX",
                                            yUnit: "vh",
                                            zUnit: "PX"
                                        }
                                    }]
                                }, {
                                    keyframe: 100,
                                    actionItems: [{
                                        id: "a-18-n-4",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".view-block",
                                                selectorGuids: ["8a684f3c-508c-80b8-6a1c-45ca78d8af90"]
                                            },
                                            yValue: 16,
                                            xUnit: "PX",
                                            yUnit: "vh",
                                            zUnit: "PX"
                                        }
                                    }]
                                }]
                            }],
                            createdOn: 0x19c1ad8b693
                        },
                        "a-28": {
                            id: "a-28",
                            title: "Pricing Item [Active]",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-28-n-2",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".pricing-arrow-box",
                                            selectorGuids: ["1e8ee556-35f9-c059-a6cd-521ab9f519a6"]
                                        },
                                        globalSwatchId: "--_colors---text-color--transparent",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 0
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-28-n-3",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: [.25, .46, .45, .94],
                                        duration: 200,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".pricing-arrow-box",
                                            selectorGuids: ["1e8ee556-35f9-c059-a6cd-521ab9f519a6"]
                                        },
                                        globalSwatchId: "--_colors---text-color--white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19c244e27c1
                        },
                        "a-29": {
                            id: "a-29",
                            title: "Pricing Item [In-active]",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-29-n-2",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: [.25, .46, .45, .94],
                                        duration: 200,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".pricing-arrow-box",
                                            selectorGuids: ["1e8ee556-35f9-c059-a6cd-521ab9f519a6"]
                                        },
                                        globalSwatchId: "--_colors---text-color--transparent",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 0
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19c244e27c1
                        },
                        "a-31": {
                            id: "a-31",
                            title: "FAQ Opens",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-31-n",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-answer",
                                            selectorGuids: ["d9927c39-271f-c53a-dc94-f315e758de34"]
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-31-n-6",
                                    actionTypeId: "PLUGIN_LOTTIE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-arrow",
                                            selectorGuids: ["d9927c39-271f-c53a-dc94-f315e758de33"]
                                        },
                                        value: 0
                                    }
                                }, {
                                    id: "a-31-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-para",
                                            selectorGuids: ["d9927c39-271f-c53a-dc94-f315e758de35"]
                                        },
                                        yValue: -16,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-31-n-4",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-answer",
                                            selectorGuids: ["d9927c39-271f-c53a-dc94-f315e758de34"]
                                        },
                                        widthUnit: "PX",
                                        heightUnit: "AUTO",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-31-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-para",
                                            selectorGuids: ["d9927c39-271f-c53a-dc94-f315e758de35"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-31-n-7",
                                    actionTypeId: "PLUGIN_LOTTIE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-arrow",
                                            selectorGuids: ["d9927c39-271f-c53a-dc94-f315e758de33"]
                                        },
                                        value: 100
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19894027ca3
                        },
                        "a-32": {
                            id: "a-32",
                            title: "FAQ Closes",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-32-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-para",
                                            selectorGuids: ["d9927c39-271f-c53a-dc94-f315e758de35"]
                                        },
                                        yValue: -16,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-32-n-4",
                                    actionTypeId: "PLUGIN_LOTTIE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-arrow",
                                            selectorGuids: ["d9927c39-271f-c53a-dc94-f315e758de33"]
                                        },
                                        value: 0
                                    }
                                }, {
                                    id: "a-32-n-3",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 300,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".faq-answer",
                                            selectorGuids: ["d9927c39-271f-c53a-dc94-f315e758de34"]
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19894027ca3
                        },
                        "a-33": {
                            id: "a-33",
                            title: "Dropdown - Hover In 2",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-33-n",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dd-navigation",
                                            selectorGuids: ["f03e21fb-203e-ed98-63fd-4cbbc6f78e24"]
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-33-n-2",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dropdown-arrrow",
                                            selectorGuids: ["fb147e33-86a4-fa94-adf4-ae333c0fcc7c"]
                                        },
                                        globalSwatchId: "--_colors---text-color--soft-stone",
                                        rValue: 197,
                                        bValue: 190,
                                        gValue: 192,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-33-n-3",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dropdown-arrrow",
                                            selectorGuids: ["fb147e33-86a4-fa94-adf4-ae333c0fcc7c"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-33-n-4",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dropdown-toggle",
                                            selectorGuids: ["f03e21fb-203e-ed98-63fd-4cbbc6f78e2d"]
                                        },
                                        globalSwatchId: "--_colors---background-color--black",
                                        rValue: 13,
                                        bValue: 13,
                                        gValue: 13,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-33-n-5",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 400,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dd-navigation",
                                            selectorGuids: ["f03e21fb-203e-ed98-63fd-4cbbc6f78e24"]
                                        },
                                        widthUnit: "PX",
                                        heightUnit: "AUTO",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-33-n-6",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 400,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dropdown-toggle",
                                            selectorGuids: ["f03e21fb-203e-ed98-63fd-4cbbc6f78e2d"]
                                        },
                                        globalSwatchId: "--_colors---background-color--blue-color",
                                        rValue: 43,
                                        bValue: 255,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-33-n-7",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 400,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dropdown-arrrow",
                                            selectorGuids: ["fb147e33-86a4-fa94-adf4-ae333c0fcc7c"]
                                        },
                                        globalSwatchId: "--_colors---background-color--blue-color",
                                        rValue: 43,
                                        bValue: 255,
                                        gValue: 0,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-33-n-8",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 250,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dropdown-arrrow",
                                            selectorGuids: ["fb147e33-86a4-fa94-adf4-ae333c0fcc7c"]
                                        },
                                        zValue: 180,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19a62cba751
                        },
                        "a-34": {
                            id: "a-34",
                            title: "Dropdown - Hover Out 2",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-34-n",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 400,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dd-navigation",
                                            selectorGuids: ["f03e21fb-203e-ed98-63fd-4cbbc6f78e24"]
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-34-n-2",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 400,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dropdown-toggle",
                                            selectorGuids: ["f03e21fb-203e-ed98-63fd-4cbbc6f78e2d"]
                                        },
                                        globalSwatchId: "--_colors---background-color--black",
                                        rValue: 13,
                                        bValue: 13,
                                        gValue: 13,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-34-n-3",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 400,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dropdown-arrrow",
                                            selectorGuids: ["fb147e33-86a4-fa94-adf4-ae333c0fcc7c"]
                                        },
                                        globalSwatchId: "--_colors---text-color--soft-stone",
                                        rValue: 197,
                                        bValue: 190,
                                        gValue: 192,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-34-n-4",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 250,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".dropdown-arrrow",
                                            selectorGuids: ["fb147e33-86a4-fa94-adf4-ae333c0fcc7c"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19a62cba751
                        },
                        "a-35": {
                            id: "a-35",
                            title: "Menu - Open 2",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-35-n",
                                    actionTypeId: "PLUGIN_LOTTIE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hamburger",
                                            selectorGuids: ["f03e21fb-203e-ed98-63fd-4cbbc6f78e2c"]
                                        },
                                        value: 0
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-35-n-2",
                                    actionTypeId: "PLUGIN_LOTTIE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 400,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hamburger",
                                            selectorGuids: ["f03e21fb-203e-ed98-63fd-4cbbc6f78e2c"]
                                        },
                                        value: 45
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !0,
                            createdOn: 0x19b30dd4593
                        },
                        "a-36": {
                            id: "a-36",
                            title: "Menu - Close 2",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-36-n",
                                    actionTypeId: "PLUGIN_LOTTIE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 400,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hamburger",
                                            selectorGuids: ["f03e21fb-203e-ed98-63fd-4cbbc6f78e2c"]
                                        },
                                        value: 0
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19b30dd4593
                        },
                        "a-41": {
                            id: "a-41",
                            title: "Performance Icon Animation",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-41-n",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 5e3,
                                        target: {
                                            selector: ".performance-icon",
                                            selectorGuids: ["b0468e5f-a24e-1820-f771-eae7bc9bb15e"]
                                        },
                                        zValue: 360,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-41-n-2",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 0,
                                        target: {
                                            selector: ".performance-icon",
                                            selectorGuids: ["b0468e5f-a24e-1820-f771-eae7bc9bb15e"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19c488c5978
                        },
                        "a-42": {
                            id: "a-42",
                            title: "Sub Arrow Animation",
                            actionItemGroups: [{
                                actionItems: [{
                                    id: "a-42-n",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 7e3,
                                        target: {
                                            selector: ".sub-arrow",
                                            selectorGuids: ["d5878e70-ba82-16df-4d0b-3b60c78aebd4"]
                                        },
                                        zValue: 360,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    id: "a-42-n-2",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 0,
                                        target: {
                                            selector: ".sub-arrow",
                                            selectorGuids: ["d5878e70-ba82-16df-4d0b-3b60c78aebd4"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }],
                            useFirstGroupAsInitialState: !1,
                            createdOn: 0x19c4898e8e1
                        },
                        "a-43": {
                            id: "a-43",
                            title: "Blog Mouse movement",
                            continuousParameterGroups: [{
                                id: "a-43-p",
                                type: "MOUSE_X",
                                parameterLabel: "Mouse X",
                                continuousActionGroups: [{
                                    keyframe: 0,
                                    actionItems: [{
                                        id: "a-43-n",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".blog-view",
                                                selectorGuids: ["4f2083cf-dbcd-f7d6-7e61-2ddfaa7fbc3a"]
                                            },
                                            xValue: -10,
                                            xUnit: "rem",
                                            yUnit: "PX",
                                            zUnit: "PX"
                                        }
                                    }]
                                }, {
                                    keyframe: 100,
                                    actionItems: [{
                                        id: "a-43-n-2",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".blog-view",
                                                selectorGuids: ["4f2083cf-dbcd-f7d6-7e61-2ddfaa7fbc3a"]
                                            },
                                            xValue: 10,
                                            xUnit: "rem",
                                            yUnit: "PX",
                                            zUnit: "PX"
                                        }
                                    }]
                                }]
                            }, {
                                id: "a-43-p-2",
                                type: "MOUSE_Y",
                                parameterLabel: "Mouse Y",
                                continuousActionGroups: [{
                                    keyframe: 0,
                                    actionItems: [{
                                        id: "a-43-n-3",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".blog-view",
                                                selectorGuids: ["4f2083cf-dbcd-f7d6-7e61-2ddfaa7fbc3a"]
                                            },
                                            yValue: -7,
                                            xUnit: "PX",
                                            yUnit: "rem",
                                            zUnit: "PX"
                                        }
                                    }]
                                }, {
                                    keyframe: 100,
                                    actionItems: [{
                                        id: "a-43-n-4",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".blog-view",
                                                selectorGuids: ["4f2083cf-dbcd-f7d6-7e61-2ddfaa7fbc3a"]
                                            },
                                            yValue: 7,
                                            xUnit: "PX",
                                            yUnit: "rem",
                                            zUnit: "PX"
                                        }
                                    }]
                                }]
                            }],
                            createdOn: 0x19c4970828f
                        },
                        slideInBottom: {
                            id: "slideInBottom",
                            useFirstGroupAsInitialState: !0,
                            actionItemGroups: [{
                                actionItems: [{
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        duration: 0,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        value: 0
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        duration: 0,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        xValue: 0,
                                        yValue: 100,
                                        xUnit: "PX",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                actionItems: [{
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "outQuart",
                                        duration: 1e3,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        xValue: 0,
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "outQuart",
                                        duration: 1e3,
                                        target: {
                                            id: "N/A",
                                            appliesTo: "TRIGGER_ELEMENT",
                                            useEventTarget: !0
                                        },
                                        value: 1
                                    }
                                }]
                            }]
                        }
                    },
                    site: {
                        mediaQueries: [{
                            key: "main",
                            min: 992,
                            max: 1e4
                        }, {
                            key: "medium",
                            min: 768,
                            max: 991
                        }, {
                            key: "small",
                            min: 480,
                            max: 767
                        }, {
                            key: "tiny",
                            min: 0,
                            max: 479
                        }]
                    }
                }), "complete" === document.readyState ? e() : document.addEventListener("readystatechange", () => {
                    "complete" === document.readyState && e()
                })
            }
        },
        t = {};

    function a(i) {
        var n = t[i];
        if (void 0 !== n) return n.exports;
        var o = t[i] = {
            id: i,
            loaded: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, a), o.loaded = !0, o.exports
    }
    a.m = e, a.d = (e, t) => {
        for (var i in t) a.o(t, i) && !a.o(e, i) && Object.defineProperty(e, i, {
            enumerable: !0,
            get: t[i]
        })
    }, a.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
            throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }), e), a.g = (() => {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    })(), a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), a.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        var e = [];
        a.O = (t, i, n, o) => {
            if (i) {
                o = o || 0;
                for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
                e[d] = [i, n, o];
                return
            }
            for (var l = 1 / 0, d = 0; d < e.length; d++) {
                for (var [i, n, o] = e[d], s = !0, c = 0; c < i.length; c++)(!1 & o || l >= o) && Object.keys(a.O).every(e => a.O[e](i[c])) ? i.splice(c--, 1) : (s = !1, o < l && (l = o));
                if (s) {
                    e.splice(d--, 1);
                    var r = n();
                    void 0 !== r && (t = r)
                }
            }
            return t
        }
    })(), a.rv = () => "1.3.9", (() => {
        var e = {
            385: 0
        };
        a.O.j = t => 0 === e[t];
        var t = (t, i) => {
                var n, o, [d, l, s] = i,
                    c = 0;
                if (d.some(t => 0 !== e[t])) {
                    for (n in l) a.o(l, n) && (a.m[n] = l[n]);
                    if (s) var r = s(a)
                }
                for (t && t(i); c < d.length; c++) o = d[c], a.o(e, o) && e[o] && e[o][0](), e[o] = 0;
                return a.O(r)
            },
            i = self.webpackChunk = self.webpackChunk || [];
        i.forEach(t.bind(null, 0)), i.push = t.bind(null, i.push.bind(i))
    })(), a.ruid = "bundler=rspack@1.3.9";
    var i = a.O(void 0, ["852", "309", "417"], function() {
        return a(66514)
    });
    i = a.O(i)
})();