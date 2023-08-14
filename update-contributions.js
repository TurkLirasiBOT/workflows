const axios = require('axios');
const fs = require('fs');

async function updateContributionsCount() {
  try {
    const username = 'TurkLirasiBOT';
    const response = await axios.get(`https://api.github.com/users/${username}/contributions`);

    const contributionsCount = response.data.total_count;

    const readmeContent = fs.readFileSync('README.md', 'utf8');
    const updatedReadmeContent = readmeContent.replace(
      /(?<=\bKatkılarım: )\d+/,
      contributionsCount.toString()
    );

    fs.writeFileSync('README.md', updatedReadmeContent);
    console.log('README.md güncellendi.');
  } catch (error) {
    console.error('Hata:', error.message);
  }
}

updateContributionsCount();
