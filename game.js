$(document).ready(function () {

    var content = $('#content')
    var optionBtns = $('#option-buttons')
    var language = "en"
    var sect = "0"

    var storySection = [
        {
            "sect_id": 0,
            "section_name": "name",
            "section_type": "data access",
            "is_sub": "FALSE",
            "is_sub_of": 999
  },
        {
            "sect_id": 1,
            "section_name": "fingerprint",
            "section_type": "data access",
            "is_sub": "FALSE",
            "is_sub_of": 999
  },
        {
            "sect_id": 2,
            "section_name": "lockdown",
            "section_type": "validity of answer",
            "is_sub": "FALSE",
            "is_sub_of": 999
  },
        {
            "sect_id": 3.1,
            "section_name": "its-fine",
            "section_type": "-",
            "is_sub": "TRUE",
            "is_sub_of": 3
  },
        {
            "sect_id": 3,
            "section_name": "follow-me",
            "section_type": "validity of answer",
            "is_sub": "FALSE",
            "is_sub_of": 999
  },
        {
            "sect_id": 4,
            "section_name": "power-outage",
            "section_type": "decision selection w/ competing info",
            "is_sub": "FALSE",
            "is_sub_of": 999
  },
        {
            "sect_id": 5.1,
            "section_name": "door-right",
            "section_type": "-",
            "is_sub": "TRUE",
            "is_sub_of": 5
  },
        {
            "sect_id": 5.2,
            "section_name": "door-left",
            "section_type": "-",
            "is_sub": "TRUE",
            "is_sub_of": 5
  },
        {
            "sect_id": 5,
            "section_name": "left-the-room",
            "section_type": "decision selection w/ competing info",
            "is_sub": "FALSE",
            "is_sub_of": 999
  },
        {
            "sect_id": 6,
            "section_name": "down-the-stairs",
            "section_type": "decision selection",
            "is_sub": "FALSE",
            "is_sub_of": 999
  },
        {
            "sect_id": 7,
            "section_name": "workspace",
            "section_type": "decision selection",
            "is_sub": "FALSE",
            "is_sub_of": 999
  },
        {
            "sect_id": 8.1,
            "section_name": "button-yes",
            "section_type": "-",
            "is_sub": "TRUE",
            "is_sub_of": 8
  },
        {
            "sect_id": 8.2,
            "section_name": "button-no",
            "section_type": "-",
            "is_sub": "TRUE",
            "is_sub_of": 8
  },
        {
            "sect_id": 8,
            "section_name": "they-are-listening",
            "section_type": "data access",
            "is_sub": "FALSE",
            "is_sub_of": 999
  },
        {
            "sect_id": 9.1,
            "section_name": "told-kai-yes",
            "section_type": "-",
            "is_sub": "TRUE",
            "is_sub_of": 9
  },
        {
            "sect_id": 9,
            "section_name": "call",
            "section_type": "decision selection",
            "is_sub": "FALSE",
            "is_sub_of": 999
  },
        {
            "sect_id": 10,
            "section_name": "meeting-room",
            "section_type": "data access",
            "is_sub": "FALSE",
            "is_sub_of": 999
  },
        {
            "sect_id": 13,
            "section_name": "the-names",
            "section_type": "data access",
            "is_sub": "FALSE",
            "is_sub_of": 999
  },
        {
            "sect_id": 14.1,
            "section_name": "told-kai-names",
            "section_type": "-",
            "is_sub": "TRUE",
            "is_sub_of": 14
  },
        {
            "sect_id": 14,
            "section_name": "the-key-cards",
            "section_type": "data access",
            "is_sub": "FALSE",
            "is_sub_of": 999
  },
        {
            "sect_id": 15,
            "section_name": "server-room",
            "section_type": "decision selection",
            "is_sub": "FALSE",
            "is_sub_of": 999
  },
        {
            "sect_id": 16,
            "section_name": "which-console",
            "section_type": "decision selection",
            "is_sub": "FALSE",
            "is_sub_of": 999
  },
        {
            "sect_id": 17,
            "section_name": "the-sensor",
            "section_type": "data access",
            "is_sub": "FALSE",
            "is_sub_of": 999
  },
        {
            "sect_id": 18,
            "section_name": "fingerprint-again",
            "section_type": "data access",
            "is_sub": "FALSE",
            "is_sub_of": 999
  },
        {
            "sect_id": 19,
            "section_name": "end",
            "section_type": "-",
            "is_sub": "FALSE",
            "is_sub_of": 999
  }
]

    var storyItems = []

    var result = []

    function setLanguage() {

        $("#lang_en").click(function () {
            language = "en"
            $('html').attr('lang', 'en');
            startGame()
        })

        $("#lang_ja").click(function () {
            language = "ja"
            $('html').attr('lang', 'ja');
            startGame()
        })
    }

    function startGame() {

        console.log("STARTED")

        var next = []

        showSection(sect)

    }

    function showSection(sectionId) {

        content.empty()
        optionBtns.empty()

        console.log(sect)
        var section = storySection.find(storySection => storySection.sect_id == sectionId)

        if (section.is_sub) {

            var sub_content = section.sect_items
            var newSectId = sub_content[sub_content.length - 1].sect_next
            sub_content.pop()

            section = storySection.find(storySection => storySection.sect_id == newSectId)

            $.each(sub_content, function () {
                section.sect_items.unshift(this)
            })
            console.log(section.sect_items)
        }

        loadContent(section.sect_items)
        loadBtns(section.sect_options)

        $(".btn").click(function () {

            if ($(this).is(':first-of-type')) {
                sect = next[0]
            } else {
                sect = next[1]
            }

            console.log("click:" + sect)

            showSection(sect)
        })

    }

    function loadContent(sectionItems) {

        $.each(sectionItems, function () {

            content.append("<div class='item'> </div>")

            var item = content.children().last()

            item.addClass(this.item_type)

            if (language == "en") {
                item.text(this.text_en)
            } else {
                item.text(this.text_ja)
                item.addClass('ja')
            }


        })
    }

    function loadBtns(sectionOpts) {

        next = []

        $.each(sectionOpts, function () {

            optionBtns.append("<button class='btn'></button>")

            var btn = optionBtns.children().last()

            if (this.is_agent_option) {
                btn.addClass("trustOpt")
            }

            this.text_en = this.text_en.replace('[[', '')
            this.text_ja = this.text_ja.replace('[[', '')
            this.text_en = this.text_en.replace(']]', '')
            this.text_ja = this.text_ja.replace(']]', '')

            if (language == "en") {
                btn.text(this.text_en)
            } else {
                btn.text(this.text_ja)
                btn.addClass('ja')
            }

            next.push(this.sect_next)

        })

        console.log("next sections:" + next)
    }

    function cleanData(data) {

        $.each(storySection, function () {

            if (this['is_sub'] == "TRUE") {
                this['is_sub'] = true
            } else {
                this['is_sub'] = false
            }

            this['sect_items'] = []
            this['sect_options'] = []
        })

        storyItems = data

        $.each(storyItems, function () {

            var sectId = this.sect_id

            delete this.section_name

            var section = storySection.find(storySection => storySection.sect_id == sectId)
            var item = this
            delete item.sect_id


            if (this.item_type == "option") {
                delete this.agent_personality
                section.sect_options.push(item)
            } else {
                if (this.item_type == "description") {
                    delete this.is_agent_option
                    delete this.sect_next
                    delete this.agent_personality
                }

                if (this.item_type == "agent_speech") {
                    delete this.is_agent_option
                    delete this.sect_next
                }
                if (this.item_type == "_pointer") {
                    delete this.is_agent_option
                    delete this.agent_personality
                }
                section.sect_items.push(item)
            }

        })
        console.log(storySection)

        setLanguage()
    }

    function parseData(url, callback) {
        Papa.parse(url, {
            download: true,
            header: true,
            complete: function (results) {
                console.log(results);
                callback(results.data)

            }
        });
    }


    parseData('story.csv', cleanData)




})
