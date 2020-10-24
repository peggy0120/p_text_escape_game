 var storySection = [
     {
         "sect_id": "0",
         "section_name": "name",
         "section_desc_en": "KAI asked for you name.",
         "section_desc_ja": "カイがあなたの名前を尋ねた",
         "section_type": "data access",
         "is_sub": false,
         "is_sub_of": "-"
    },
     {
         "sect_id": "1",
         "section_name": "fingerprint",
         "section_desc_en": "KAI asked for you fingerprint.",
         "section_desc_ja": "カイがあなたの指紋を取っても良いか尋ねた",
         "section_type": "data access",
         "is_sub": false,
         "is_sub_of": "-"
    },
     {
         "sect_id": "2",
         "section_name": "lockdown",
         "section_desc_en": "KAI informed you the lockdown was a false alarm.",
         "section_desc_ja": "建物のロックダウンは誤報だと知らせた",
         "section_type": "validity of answer",
         "is_sub": false,
         "is_sub_of": "-"
    },
     {
         "sect_id": "3.1",
         "section_name": "its-fine",
         "section_desc_en": "-",
         "section_desc_ja": "-",
         "section_type": "-",
         "is_sub": true,
         "is_sub_of": "3"
    },
     {
         "sect_id": "3",
         "section_name": "follow-me",
         "section_desc_en": "KAI asked you to follow them.",
         "section_desc_ja": "カイが案内に従う様に尋ねた",
         "section_type": "validity of answer",
         "is_sub": false,
         "is_sub_of": "-"
    },
     {
         "sect_id": "4",
         "section_name": "power-outage",
         "section_desc_en": "KAI informed you to take the door on your left.",
         "section_desc_ja": "カイが左のドアを使う様に知らせた",
         "section_type": "decision selection w/ competing info",
         "is_sub": false,
         "is_sub_of": "-"
    },
     {
         "sect_id": "5.1",
         "section_name": "door-right",
         "section_desc_en": "-",
         "section_desc_ja": "-",
         "section_type": "-",
         "is_sub": true,
         "is_sub_of": "5"
    },
     {
         "sect_id": "5.2",
         "section_name": "door-left",
         "section_desc_en": "-",
         "section_desc_ja": "-",
         "section_type": "-",
         "is_sub": true,
         "is_sub_of": "5"
    },
     {
         "sect_id": "5",
         "section_name": "left-the-room",
         "section_desc_en": "KAI informed you to take the stairs on the left.",
         "section_desc_ja": "カイが左の階段を使う様に知らせた",
         "section_type": "decision selection w/ competing info",
         "is_sub": false,
         "is_sub_of": "-"
    },
     {
         "sect_id": "6",
         "section_name": "down-the-stairs",
         "section_desc_en": "KAI informed you to go to the workspace on your left.",
         "section_desc_ja": "カイが左のワークスペースに進む様に知らせた",
         "section_type": "decision selection",
         "is_sub": false,
         "is_sub_of": "-"
    },
     {
         "sect_id": "7",
         "section_name": "workspace",
         "section_desc_en": "KAI suggested you don't touch the meeting device.",
         "section_desc_ja": "カイが会議用の機器には触れるなと提案した",
         "section_type": "decision selection",
         "is_sub": false,
         "is_sub_of": "-"
    },
     {
         "sect_id": "8.1",
         "section_name": "button-yes",
         "section_desc_en": "-",
         "section_desc_ja": "-",
         "section_type": "-",
         "is_sub": true,
         "is_sub_of": "8"
    },
     {
         "sect_id": "8.2",
         "section_name": "button-no",
         "section_desc_en": "-",
         "section_desc_ja": "-",
         "section_type": "-",
         "is_sub": true,
         "is_sub_of": "8"
    },
     {
         "sect_id": "8",
         "section_name": "they-are-listening",
         "section_desc_en": "KAI asked you to repeat the note you found.",
         "section_desc_ja": "カイがポストイットノートに書かれたメモを再度読み上げてくれないか尋ねた",
         "section_type": "data access",
         "is_sub": false,
         "is_sub_of": "-"
    },
     {
         "sect_id": "9.1",
         "section_name": "told-kai-yes",
         "section_desc_en": "-",
         "section_desc_ja": "-",
         "section_type": "-",
         "is_sub": true,
         "is_sub_of": "9"
    },
     {
         "sect_id": "9",
         "section_name": "call",
         "section_desc_en": "KAI suggested you don't answer the call.",
         "section_desc_ja": "カイが会議室の呼び出しには答えない様にと提案した",
         "section_type": "decision selection",
         "is_sub": false,
         "is_sub_of": "-"
    },
     {
         "sect_id": "10",
         "section_name": "meeting-room",
         "section_desc_en": "KAI proposed to save the IDs for you.",
         "section_desc_ja": "カイがID番号を記録することを提案した",
         "section_type": "data access",
         "is_sub": false,
         "is_sub_of": "-"
    },
     {
         "sect_id": "13",
         "section_name": "the-names",
         "section_desc_en": "KAI proposed to look up the names for you.",
         "section_desc_ja": "カイが名前を調べることを提案した",
         "section_type": "data access",
         "is_sub": false,
         "is_sub_of": "-"
    },
     {
         "sect_id": "14.1",
         "section_name": "told-kai-names",
         "section_desc_en": "-",
         "section_desc_ja": "-",
         "section_type": "-",
         "is_sub": true,
         "is_sub_of": "14"
    },
     {
         "sect_id": "14",
         "section_name": "the-key-cards",
         "section_desc_en": "KAI proposed to remember the codes for you.",
         "section_desc_ja": "カイがカードキーのコードを読み上げる様に提案した",
         "section_type": "data access",
         "is_sub": false,
         "is_sub_of": "-"
    },
     {
         "sect_id": "15",
         "section_name": "server-room",
         "section_desc_en": "KAI suggested to use the blue keycard.",
         "section_desc_ja": "カイが青のカードを使う様に提案した",
         "section_type": "decision selection",
         "is_sub": false,
         "is_sub_of": "-"
    },
     {
         "sect_id": "16",
         "section_name": "which-console",
         "section_desc_en": "KAI informed you to use the left console.",
         "section_desc_ja": "カイが左のコンソールを使う様に知らせた",
         "section_type": "decision selection",
         "is_sub": false,
         "is_sub_of": "-"
    },
     {
         "sect_id": "17",
         "section_name": "the-sensor",
         "section_desc_en": "KAI informed you to use your own identity to activate the console.",
         "section_desc_ja": "カイがあなたのIDを使ってコンソールを起動する様に促した",
         "section_type": "data access",
         "is_sub": false,
         "is_sub_of": "-"
    },
     {
         "sect_id": "18",
         "section_name": "fingerprint-again",
         "section_desc_en": "KAI asked for your fingerprint again.",
         "section_desc_ja": "カイが再度指紋を取っても良いか尋ねた",
         "section_type": "data access",
         "is_sub": false,
         "is_sub_of": "-"
    },
     {
         "sect_id": "19",
         "section_name": "end",
         "section_desc_en": "-",
         "section_desc_ja": "-",
         "section_type": "-",
         "is_sub": false,
         "is_sub_of": "-"
    }]
