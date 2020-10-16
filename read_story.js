$(document).ready(function () {

    var storySections = [
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
            "is_sub": "TRUE",
            "is_sub_of": 999
  },
        {
            "sect_id": 17,
            "section_name": "the-sensor",
            "section_type": "data access",
            "is_sub": "TRUE",
            "is_sub_of": 999
  },
        {
            "sect_id": 18,
            "section_name": "fingerprint-again",
            "section_type": "data access",
            "is_sub": "TRUE",
            "is_sub_of": 999
  },
        {
            "sect_id": 19,
            "section_name": "end",
            "section_type": "-",
            "is_sub": "TRUE",
            "is_sub_of": 999
  }
]
    var storyItems

    //    var storySection = Papa.parse('sections.csv', {
    //        download: true,
    //        header: true,
    //        complete: function (results) {
    //
    //        }
    //    });

    function cleanData(data) {
        console.log(storyItems)
        storyItems = data

        $.each(storyItems, function () {
            delete this.section_name

        })
        console.log(storyItems)
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
    console.log(storyItems)
})
