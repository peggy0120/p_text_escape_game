$(document).ready(function () {

    var content = $('#content')
    var optionBtns = $('#option-buttons')

    var language = "en"
    var personality = ["orig", "butler", "friend"]
    var psnlOpt = 0;

    var sect = "0"

    var storySection = [
        {
            "sect_id": 0,
            "section_name": "name",
            "section_type": "data access",
            "is_sub": false,
            "is_sub_of": 999
        },
        {
            "sect_id": 1,
            "section_name": "fingerprint",
            "section_type": "data access",
            "is_sub": false,
            "is_sub_of": 999
        },
        {
            "sect_id": 2,
            "section_name": "lockdown",
            "section_type": "validity of answer",
            "is_sub": false,
            "is_sub_of": 999
        },
        {
            "sect_id": 3.1,
            "section_name": "its-fine",
            "section_type": "-",
            "is_sub": true,
            "is_sub_of": 3
        },
        {
            "sect_id": 3,
            "section_name": "follow-me",
            "section_type": "validity of answer",
            "is_sub": false,
            "is_sub_of": 999
        },
        {
            "sect_id": 4,
            "section_name": "power-outage",
            "section_type": "decision selection w/ competing info",
            "is_sub": false,
            "is_sub_of": 999
        },
        {
            "sect_id": 5.1,
            "section_name": "door-right",
            "section_type": "-",
            "is_sub": true,
            "is_sub_of": 5
        },
        {
            "sect_id": 5.2,
            "section_name": "door-left",
            "section_type": "-",
            "is_sub": true,
            "is_sub_of": 5
        },
        {
            "sect_id": 5,
            "section_name": "left-the-room",
            "section_type": "decision selection w/ competing info",
            "is_sub": false,
            "is_sub_of": 999
        },
        {
            "sect_id": 6,
            "section_name": "down-the-stairs",
            "section_type": "decision selection",
            "is_sub": false,
            "is_sub_of": 999
        },
        {
            "sect_id": 7,
            "section_name": "workspace",
            "section_type": "decision selection",
            "is_sub": false,
            "is_sub_of": 999
        },
        {
            "sect_id": 8.1,
            "section_name": "button-yes",
            "section_type": "-",
            "is_sub": true,
            "is_sub_of": 8
        },
        {
            "sect_id": 8.2,
            "section_name": "button-no",
            "section_type": "-",
            "is_sub": true,
            "is_sub_of": 8
        },
        {
            "sect_id": 8,
            "section_name": "they-are-listening",
            "section_type": "data access",
            "is_sub": false,
            "is_sub_of": 999
        },
        {
            "sect_id": 9.1,
            "section_name": "told-kai-yes",
            "section_type": "-",
            "is_sub": true,
            "is_sub_of": 9
        },
        {
            "sect_id": 9,
            "section_name": "call",
            "section_type": "decision selection",
            "is_sub": false,
            "is_sub_of": 999
        },
        {
            "sect_id": 10,
            "section_name": "meeting-room",
            "section_type": "data access",
            "is_sub": false,
            "is_sub_of": 999
        },
        {
            "sect_id": 13,
            "section_name": "the-names",
            "section_type": "data access",
            "is_sub": false,
            "is_sub_of": 999
        },
        {
            "sect_id": 14.1,
            "section_name": "told-kai-names",
            "section_type": "-",
            "is_sub": true,
            "is_sub_of": 14
        },
        {
            "sect_id": 14,
            "section_name": "the-key-cards",
            "section_type": "data access",
            "is_sub": false,
            "is_sub_of": 999
        },
        {
            "sect_id": 15,
            "section_name": "server-room",
            "section_type": "decision selection",
            "is_sub": false,
            "is_sub_of": 999
        },
        {
            "sect_id": 16,
            "section_name": "which-console",
            "section_type": "decision selection",
            "is_sub": false,
            "is_sub_of": 999
        },
        {
            "sect_id": 17,
            "section_name": "the-sensor",
            "section_type": "data access",
            "is_sub": false,
            "is_sub_of": 999
        },
        {
            "sect_id": 18,
            "section_name": "fingerprint-again",
            "section_type": "data access",
            "is_sub": false,
            "is_sub_of": 999
        },
        {
            "sect_id": 19,
            "section_name": "end",
            "section_type": "-",
            "is_sub": false,
            "is_sub_of": 999
        }
]

    var storyItems = []

    var result = []

    function preGame() {

        setPersonality()

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

    function setPersonality() {
        psnlOpt = Math.floor(Math.random() * 2) + 1
        console.log("Personality set to: " + personality[psnlOpt])
    }

    function startGame() {

        $('button').fadeOut(2000)

        console.log("------- GAME START -------")

        var next = []

        loadSection(sect)

    }

    function endGame() {
        $('.container').delay(800).empty()

        console.log("------ END OF GAME -------")
    }

    function loadSection(sectionId) {

        $('div.item').fadeOut(600)
        $('button').fadeOut(600)

        content.delay(800).empty()
        optionBtns.delay(800).empty()

        console.log("*SECTION: " + sect)
        var section = storySection.find(storySection => storySection.sect_id == sectionId)

        result.push({
            'sect_id': sect
        })

        if (section.is_sub) {

            var sub_content = section.sect_items
            var newSectId = sub_content[sub_content.length - 1].sect_next
            sub_content.pop()
            sub_content.reverse()

            section = storySection.find(storySection => storySection.sect_id == newSectId)

            $.each(sub_content, function () {
                section.sect_items.unshift(this)
            })
            console.log(section.sect_items)
        }

        loadContent(section.sect_items)

        if (sect == "19") {
            loadFinalBtn()
        } else {
            loadBtns(section.sect_options)
        }

        var fadeDelay = 600
        showSection(fadeDelay)
        console.log("next sections:" + next)

        $(".opt").click(function () {

            $(".opt").fadeOut(600)

            if ($(this).is(':first-of-type')) {
                result[result.length - 1]['sect_option'] = 0
                sect = next[0]
                console.log("user clicked left opt")
            } else {
                result[result.length - 1]['sect_option'] = 1
                sect = next[1]
                console.log("user clicked right opt")
            }


            console.log(result[result.length - 1])

            loadSection(sect)
        })

        $(".final").click(function () {
            $(".content").fadeOut(600)
            $(".final").fadeOut(600)
            endGame()
        })

    }

    function estReadtime(text) {

        var readTime = 0

        if (language == "en") {
            // 180 words per min
            var wordCount = text.split(' ').length
            readTime = wordCount / 3 * 1000 - 500
        } else {
            // 500 chars per min
            readTime = text.length / 8 * 1000
        }

        return readTime
    }

    function loadContent(sectionItems) {

        var last_is_speech = false

        $.each(sectionItems, function () {

            if (this.item_type == "agent_speech") {
                if (this.agent_personality !== personality[psnlOpt]) {
                    return true;
                }
            }

            content.append("<div class='item' style='display:none;'> </div>")

            var item = content.children().last()

            item.addClass(this.item_type)

            if (language == "en") {
                item.html(this.text_en.replace(/\\n/g, "<br />"))
                item.html(this.text_en.replace(/ ([^ ]*)$/, '&nbsp;$1'))
            } else {
                item.html(this.text_ja.replace(/\\n/g, "<br />"))
                item.addClass('ja')
            }

            if (this.item_type == "agent_speech") {

                item.addClass(personality[psnlOpt])

                if (!last_is_speech) {

                    if (sect == "0") {
                        if (language == "en") {
                            item.prepend("<div class='kai first'>The Voice:</div>")
                        } else {
                            item.prepend("<div class='kai first'>謎の声：</div>")
                        }

                    } else {
                        if (language == "en") {
                            item.prepend("<div class='kai'>KAI:</div>")
                        } else {
                            item.prepend("<div class='kai'>カイ：</div>")
                        }
                    }

                    last_is_speech = true
                }
            } else {
                last_is_speech = false
            }


        })
    }

    function loadBtns(sectionOpts) {

        next = []

        $.each(sectionOpts, function () {

            optionBtns.hide()
            optionBtns.append("<button class='btn opt'></button>")

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
    }

    function loadFinalBtn() {

        optionBtns.hide()
        optionBtns.append("<button class='btn final'>See Your Final Results</button>")

        optionBtns.attr("grid-template-columns", "repeat(1, auto)")
    }

    function showSection(fadeDelay) {

        $('div.item').each(function () {

            $(this).delay(fadeDelay).fadeIn(800)

            //            $("body,html").delay(fadeDelay).animate({
            //                scrollTop: $(this).offset().top
            //            }, 600);

            fadeDelay += estReadtime($(this).text())
        })

        optionBtns.delay(fadeDelay - 3000).fadeIn(600)
    }

    function cleanData(data) {

        $.each(storySection, function () {
            this['sect_items'] = []
            this['sect_options'] = []
        })

        storyItems = data

        $.each(storyItems, function () {

            // remove unused data point
            delete this.section_name

            // convert to boolean
            this.is_agent_option = this.is_agent_option == "true" ? true : false

            // find the corresponding section from sections data
            var section = storySection.find(storySection => storySection.sect_id == this.sect_id)

            var item = this

            // remove unused data point & sort item to corresponding section
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
        console.log('***PARSED DATA***')
        console.log(storySection)

        preGame()
    }

    function parseData(url, callback) {
        Papa.parse(url, {
            download: true,
            header: true,
            complete: function (results) {
                console.log('***RAW DATA***')
                console.log(results);
                callback(results.data)

            }
        });
    }

    parseData('story.csv', cleanData)

})
