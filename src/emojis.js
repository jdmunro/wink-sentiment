//     wink-sentiment
//     Accurate and fast sentiment scoring of phrases with hashtags, emoticons & emojis.
//
//     Copyright (C) 2017-18  GRAYPE Systems Private Limited
//
//     This file is part of “wink-sentiment”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
// This is dervied data from Emoji Sentiment Ranking 1.0. The original research
// reference: Kralj Novak, Petra; Smailović, Jasmina; Sluban, Borut and Mozetič,
// Igor, 2015, Emoji Sentiment Ranking 1.0, Slovenian language resource repository
// CLARIN.SI, http://hdl.handle.net/11356/1048. The derived data only includes top
// emojis. The sentiment score has been computed by subtracting the ratio of negative
// to total occurrences from the positive to the total occurrences and then rescaling
// it to a range of -5 to +5.

// The original data was published under Creative Commons -
// Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) license. You may
// read the license at https://creativecommons.org/licenses/by-sa/4.0/ URL.
// Sourced from https://www.clarin.si/repository/xmlui/handle/11356/1048 URL.
var emojis = {
  "😂": 1,
  "🤣": 2,
  "🤪": 3,
  "🤓": 1,
  "🤩": 3,
  "🥳": 2,
  "😟": -2,
  "🙁": -1,
  "☹️": -1,
  "🥺": -2,
  "😢": -3,
  "😭": -4,
  "🤬": -4,
  "🤯": -3,
  "😳": -3,
  "🥵": -2,
  "😓": -2,
  "🤗": 3,
  "❤": 4,
  "♥": 3,
  "😍": 3,
  "🥰": 3,
  "😘": 4,
  "😊": 3,
  "👌": 3,
  "💕": 3,
  "👏": 3,
  "😁": 2,
  "☺": 3,
  "♡": 3,
  "👍": 3,
  "😩": -2,
  "🙏": 2,
  "✌": 2,
  "😏": 2,
  "😉": 2,
  "🙌": 3,
  "🙈": 2,
  "💪": 3,
  "😄": 2,
  "😒": -2,
  "💃": 4,
  "💖": 4,
  "😃": 3,
  "😔": -1,
  "😱": 1,
  "🎉": 4,
  "😜": 2,
  "☯": 0,
  "🌸": 3,
  "💜": 3,
  "💙": 4,
  "✨": 2,
  "💗": 3,
  "★": 1,
  "█": 0,
  "☀": 2,
  "😡": -1,
  "😎": 2,
  "💋": 3,
  "😋": 3,
  "🙊": 2,
  "😴": 0,
  "🎶": 3,
  "💞": 4,
  "😌": 2,
  "🔥": 1,
  "💯": 1,
  "🔫": -1,
  "💛": 4,
  "💁": 2,
  "💚": 3,
  "♫": 1,
  "😞": -1,
  "😆": 2,
  "😝": 2,
  "😪": 0,
  "😫": -1,
  "😅": 1,
  "👊": 1,
  "💀": -1,
  "😀": 3,
  "🙂": 1,
  "🙃": 1,
  "😚": 4,
  "😗": 3,
  "😻": 3,
  "©": 1,
  "👀": 0,
  "💘": 3,
  "🐓": 0,
  "☕": 1,
  "👋": 2,
  "✋": 1,
  "🎊": 4,
  "🍕": 2,
  "❄": 3,
  "😥": -1,
  "😕": -2,
  "💥": 1,
  "💔": -1,
  "😤": -1,
  "😈": 1,
  "►": 1,
  "✈": 2,
  "🔝": 2,
  "😰": -2,
  "⚽": 3,
  "😑": -2,
  "👑": 4,
  "😹": 1,
  "👉": 2,
  "🍃": 2,
  "🎁": 4,
  "😠": -2,
  "🐧": 2,
  "☆": 2,
  "🍀": 1,
  "🎈": 4,
  "🎅": 2,
  "😣": -1,
  "🤕": -1,
  "😐": -2,
  "✊": 2,
  "😨": -1,
  "😖": -1,
  "💤": 2,
  "💓": 3,
  "👎": -1,
  "💦": 2,
  "✔": 1,
  "⚡": 1,
  "🙋": 2,
  "🎄": 3,
  "💩": -1,
  "🎵": 3,
  "➡": 1,
  "😛": 3,
  "😬": -1,
  "🤢": -3,
  "🤮": -3,
  "😷": -1,
  "🥴": -3,
  "👯": 2,
  "💎": 3,
  "🌿": 2,
  "🎂": 3,
  "🌟": 2,
  "🔮": 1,
  "❗": 1,
  "👫": 1,
  "🏆": 4,
  "✖": 2,
  "☝": 2,
  "😙": 4,
  "⛄": 3,
  "👅": 2,
  "♪": 3,
  "🍂": 3,
  "💏": 2,
  "🌴": 3,
  "👈": 2,
  "🌹": 3,
  "🙆": 3,
  "➜": 1,
  "👻": 1,
  "💰": 1,
  "🍻": 3,
  "🙅": -1,
  "🌞": 3,
  "🍁": 2,
  "⭐": 3,
  "▪": 1,
  "🎀": 3,
  "━": 1,
  "☷": 0,
  "🐷": 2,
  "🙉": 2,
  "🌺": 3,
  "💅": 2,
  "🐶": 3,
  "🌚": 2,
  "👽": 2,
  "🎤": 2,
  "👭": 2,
  "🎧": 2,
  "👆": 2,
  "🍸": 3,
  "🍷": 2,
  "®": 1,
  "🍉": 3,
  "😇": 3,
  "☑": 1,
  "🏃": 2,
  "😿": -2,
  "│": 2,
  "💣": 0,
  "🍺": 3,
  "▶": 1,
  "😲": 0,
  "🎸": 3,
  "🍹": 3,
  "💫": 3,
  "📚": 2,
  "😶": -1,
  "🌷": 3,
  "💝": 3,
  "💨": 2,
  "🏈": 3,
  "💍": 2,
  "☔": 1,
  "👸": 3,
  "🇪": 3,
  "░": 0,
  "🍩": 2,
  "👾": 2,
  "☁": 2,
  "🌻": 3,
  "😵": 0,
  "📒": 0,
  "↿": 3,
  "🐯": 2,
  "👼": 2,
  "🍔": 1,
  "😸": 2,
  "👶": 2,
  "↾": 3,
  "💐": 4,
  "🌊": 3,
  "🍦": 2,
  "🍓": 3,
  "👇": 1,
  "💆": 1,
  "🍴": 3,
  "😧": 0,
  "🇸": 3,
  "😮": 1,
  "▓": 0,
  "🚫": -2,
  "😽": 3,
  "🌈": 3,
  "🙀": 2,
  "⚠": 0,
  "🎮": 2,
  "╯": 0,
  "🍆": 2,
  "🍰": 2,
  "✓": 1,
  "👐": 0,
  "🙇": 1,
  "🍟": 2,
  "🍌": 2,
  "💑": 3,
  "👬": 0,
  "🐣": 2,
  "🎃": 3,
  "▬": 2,
  "🐾": 3,
  "🎓": 3,
  "🏊": 3,
  "🍫": 1,
  "📷": 2,
  "👄": 2,
  "🌼": 4,
  "🐱": 3,
  "║": 1,
  "🐸": 0,
  "🇺": 3,
  "👿": -3,
  "🚬": 3,
  "✿": 2,
  "📖": 1,
  "🐒": 3,
  "🌍": 3,
  "┊": 5,
  "🐥": 3,
  "🌀": 1,
  "🐼": 1,
  "🎥": 2,
  "💄": 2,
  "💸": 1,
  "⛔": 3,
  "●": 1,
  "🏀": 1,
  "💉": 2,
  "💟": 4,
  "🚗": 1,
  "😯": 1,
  "📝": 1,
  "═": 0,
  "♦": 2,
  "💭": 1,
  "🔪": -1,
};

module.exports = emojis;
