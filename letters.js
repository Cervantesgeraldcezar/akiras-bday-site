window.onload = function() {
  const name = localStorage.getItem("username");
  document.getElementById("welcome").innerText = `Happy 18th Birthday, ${name}! 🌹`;
};

function showLetter(type) {
  let message = "";

  switch(type) {
    case "begin":
      message = "💌 Akira, it’s funny to think how our story started. We didn’t meet in the usual way — it was through TikTok, because of my mom. She was friends with you there, and one day she introduced me to you. At first, we were just ordinary friends, chatting here and there, nothing too deep. But looking back, that simple introduction was the start of something I never expected. Who would’ve thought that a casual connection online would grow into one of the most important friendships of my life? That moment was the beginning of a bond that feels more like family than just friendship.";
      break;
    case "serotonin":
      message = "💌 You’ve become my daily dose of happiness, Akira. I remember those summer days when I’d call you just to talk, and before we knew it, hours had passed. You always had this way of making me laugh, of turning even the most boring day into something fun. You’re funny, jolly, open-minded, and strong — and being around you feels like sunshine. I’m not the type to open up easily, but with you, it’s different. You make me feel safe, like I can just be myself. You’ve been my serotonin, my comfort, and my joy, and I’ll always treasure that";
      break;
    case "ups":
      message = "💌 We’ve shared so many ups and downs together. You know my flaws, my secrets, even the ones I never told my family. You know how to make me smile, and yes, you also know how to make me mad sometimes — but that’s what makes our bond real. And I know your flaws too, and I love you for them, because they make you human. We’ve laughed together, we’ve argued, we’ve comforted each other, and through it all, we’ve stayed close. That’s why I see you not just as a friend, but almost like a sister. We’ve been through so much, and I know we’ll go through more — but I also know we’ll always have each other’s backs.";
      break;
    case "reminders":
      message = "💌 Akira, I want to remind you of something important: you are strong. I’ve seen you cry, I’ve seen you struggle, but I’ve also seen you stand up and face your problems with courage. You inspire me with your strength, even when you don’t realize it. Life isn’t always easy, but you never let it break you. Please never forget that you are loved, valued, and admired — not just by me, but by everyone lucky enough to know you. And whenever you feel like the world is too heavy, remember that I’m here, always, ready to listen, to laugh, or just to sit with you in silence.";
      break;
    case "words":
      message = "💌 There are so many words I want to say, but sometimes I don’t know how to put them together. I’m not usually open to anyone, but with you, it’s different. I’m still surprised at how easily I share my secrets with you, things I never told anyone else. Maybe it’s because I see parts of myself in you, and that makes me comfortable. I’m grateful that you trust me with your secrets too. You’re more than a friend — you’re someone I feel deeply connected to, like my twin. You’ve become such an important part of my life, and I just want you to know how much you mean to me.";
      break;
    case "wishes":
      message = `
Akira, today you turn 18, and I want to give you not just simple wishes, but prayers and hopes from my heart. You’re more than a friend to me — you’re like a sister, someone I trust and treasure deeply. So here are my 18 wishes for you, each one carrying a piece of my love and gratitude for having you in my life:

1. Happiness that lasts forever — I wish you endless joy in every moment, even in the smallest things.
2. Strength in challenges — May you always find the courage to face life’s battles head-on.
3. Dreams fulfilled — I hope you chase your passions and see them come true.
4. Laughter every day — Because your smile and laugh are the best medicine.
5. Love surrounding you — May you always feel loved, not just by me, but by everyone who cares for you.
6. True friendships — I wish you friends who uplift you, just as you’ve uplifted me.
7. Peace in your heart — May you always find calm even in the storm.
8. Success in your journey — Whatever path you choose, I hope it leads to greatness.
9. Good health — Because you deserve to live strong and well.
10. Confidence in yourself — Never doubt how amazing you are.
11. Wisdom in choices — May you always be guided to what’s best for you.
12. Adventure and excitement — I hope life gives you stories worth telling.
13. Comfort in hard times — May you always find someone to lean on, and know I’ll always be here.
14. Faith in brighter days — Even when things feel heavy, may you believe in tomorrow.
15. Gratitude for little things — Because the small joys make life beautiful.
16. Inspiration to others — You already inspire me, and I know you’ll inspire many more.
17. Resilience through storms — May you rise stronger every time life tests you.
18. A life filled with love and joy — Above all, I wish you a life that makes your heart full.

Akira, these aren’t just wishes — they’re promises from me that I’ll always cheer for you, support you, and remind you of how strong and wonderful you are. Happy 18th birthday, my very close friend, my almost-sister. 🌹
  `;
  break;

      break;
    case "final":
      message = "💌 Akira, meeting you was one of the greatest blessings in my life. From TikTok to SM North, from calls to real-life moments, you’ve shown me the same warmth and care everywhere. At first, I thought it would be awkward to meet in person, but it wasn’t — because you’re genuine. You made me feel comfortable, just like you do on calls. I’m so glad I met you. You’re strong, funny, and someone I’ll always treasure. You’re not just my close friend — you’re like a sister to me. Happy 18th birthday, Akira Nova. 🌹 I’ll always be here, cheering for you, supporting you, and reminding you how amazing you are.";
      break;
  }

  document.getElementById("letterText").innerText = message;
  document.getElementById("letterModal").style.display = "block";
}
function closeModal() {
  document.getElementById("letterModal").style.display = "none";
}

// Allow closing when clicking outside the modal
window.onclick = function(event) {
  const modal = document.getElementById("letterModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};