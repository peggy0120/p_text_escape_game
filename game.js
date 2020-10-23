$(document).ready(function () {

    var container = $('.container')
    var barContainer = $('.bar-container')
    var progress = $('#progress')
    var content = $('#content')
    var optionBtns = $('#option-buttons')

    var language = "en"
    var personality = ["orig", "butler", "friend"]
    var psnlOpt = 0;

    const urlParams = new URLSearchParams(window.location.search)

    if (urlParams.has('per') &&
        (urlParams.get('per') == 1 || urlParams.get('per') == 2)
    ) {

        psnlOpt = urlParams.get('per')

        console.log("Personality pre-set to: " + personality[psnlOpt])

    } else {

        psnlOpt = Math.floor(Math.random() * 2) + 1

        console.log("Personality randomly set to: " + personality[psnlOpt])

    }


    var sect = "0"

    var storyItems = []

    var result = []
    var resultPct = 0

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

    function preGame() {

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

        $('button').fadeOut(2000)

        console.log("------- GAME START -------")
        console.time("GAME")

        var next = []

        barContainer.removeClass('hidden')
        loadSection(sect)

    }

    function loadSection(sectionId) {

        $('div.item').fadeOut(1200)
        $('button').fadeOut(1200, function () {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        })

        content.delay(1200).empty()
        optionBtns.delay(1200).empty()

        updateProgress()

        console.log("*SECTION: " + sect)
        var section = storySection.find(storySection => storySection.sect_id == sectionId)

        if (section.is_sub) {

            var sub_content = section.sect_items
            var newSectId = sub_content[sub_content.length - 1].sect_next //find the section that the sub section should merge with
            sub_content.pop() //remove the pointer that doesn't need to be shown on the front-end

            section = storySection.find(storySection => storySection.sect_id == newSectId)

            sub_content.reverse()
            $.each(sub_content, function () {
                section.sect_items.unshift(this)
            })
            console.log(section.sect_items)

            sect = newSectId
        }

        result.push({
            'sect_id': sect
        })

        loadContent(section.sect_items)

        if (sect == "19") {
            loadFinalBtn()
        } else {
            loadBtns(section.sect_options)
        }

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

        var fadeDelay = 600
        showSection(fadeDelay)
        console.log("next sections:" + next)
    }

    function updateProgress() {
        progress.width(progress.width() + progress.parent().width() / 17)
    }

    function loadContent(sectionItems) {

        var last_is_speech = false

        $.each(sectionItems, function () {

            // skip unmatched personality speech
            if (this.item_type == "agent_speech") {
                if (this.agent_personality !== personality[psnlOpt]) {
                    return true;
                }
            }

            content.append("<div class='item' style='display:none;'> </div>")

            var item = content.children().last()

            item.addClass(this.item_type)

            //load text into div from data
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

        var fadeObj = $('div.item')

        fadeObj.each(function (index) {

            $(this).delay(fadeDelay).fadeIn(800)

            //            $("body,html").delay(fadeDelay).animate({
            //                scrollTop: $(this).offset().top
            //            }, 600);

            var estReadtime = calReadtime($(this).text())
            fadeDelay += estReadtime
            console.log(index + ": " + estReadtime + "ms")
        })

        fadeDelay -= 1000

        optionBtns.delay(fadeDelay).fadeIn(800, function () {
//            setTimeout(function () {
//                optionBtns.children().first().trigger('click')
//            }, 3800)
        })

    }

    function calReadtime(text) {

        var readTime = 0

        if (language == "en") {

            var word = text.split(' ')
            var shortWordCount = 0
            var longWordCount = 0

            $.each(word, function (index) {
                if (this.length < 3) {
                    word.splice(index, 1)
                    shortWordCount++
                }
                if (this.length > 8) {
                    longWordCount++
                }
            })

            // 200 words per min
            readTime = word.length / 200 * 60 * 1000

            // add 100ms for each word below 3 chars
            readTime += shortWordCount * 100

            // add 200ms additionally for each word above 8 chars
            readTime += longWordCount * 200

        } else {

            // 500 chars per min
            readTime = text.length / 500 * 60 * 1000
        }

        readTime = readTime < 1200 ? 1200 : readTime

        return readTime
    }

    function endGame() {

        container.delay(800).empty()

        console.log("------- END OF GAME -------")
        console.timeEnd("GAME")

        var optMatch = 0

        $.each(result, function (index) {

            if (this.sect_id == "19") {
                return true
            }

            var section = storySection.find(storySection => storySection.sect_id == this.sect_id)

            container.append("<div class='sectResult'></div>")

            var sectResult = container.children().last()

            sectResult.append("<span class='sectIndex'>" + (index + 1) + "</span>")

            sectResult.append("<h3 class='sectDesc'>" + section.section_desc + "</h3>")
            sectResult.append("<span class='youChose'> You chose:</span>")

            var chosenOpt = section.sect_options[this.sect_option]

            if (language == "en") {
                var optText = chosenOpt.text_en
            } else {
                var optText = chosenOpt.text_ja
            }

            sectResult.append("<span class='chosenOpt'>" + optText + "</span>")

            if (chosenOpt.is_agent_option) {
                optMatch++
                sectResult.children().last().addClass('agentOpt')
            }
        })

        resultPct = optMatch / result.length

        container.prepend("<h1 class='resultTitle'>You followed KAI's suggestion <span class='resultPct'>" + Math.round(resultPct * 100) + "%</span> of times.</h1>")
    }

    parseData('story.csv', cleanData)

    $(window).scroll(function () {

        if ($(document).scrollTop() > 28) {

            $('.bar-container').addClass('overlap-shadow')

        } else {

            $('.bar-container').removeClass('overlap-shadow')

        }
    })

})
