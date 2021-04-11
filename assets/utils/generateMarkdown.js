function titleBadge(title) {
    if (title === 'engineer') {
        return "https://github.com/VHarris113/team-cards/blob/26ffd7f59201ae1b876593222403d8a62aa08fe2/assets/images/engineer.png"
    } if (title === 'intern')  {
        return "https://github.com/VHarris113/team-cards/blob/26ffd7f59201ae1b876593222403d8a62aa08fe2/assets/images/intern.png"
    } if (title === 'manager') {
        return "https://github.com/VHarris113/team-cards/blob/3ec91d7ebf67583102bd1bcdaf41ffcaa661640d/utils/generateMarkdown.js#L7"
    } else (license === "None") 
        return "Please choose and occupation."
}

module.exports = { titleBadge };