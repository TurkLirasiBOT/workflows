const axios = require('axios');
const fs = require('fs');

async function updateContributionsCount() {
  try {
    const username = 'TurkLirasiBOT'; // GitHub kullanıcı adınız
    const response = await axios.get(`https://api.github.com/users/${username}/contributions`);

    const contributionsCount = response.data.total_count;

    const readmePath = 'README.md';
    let readmeContent = fs.readFileSync(readmePath, 'utf8');

    const updatedReadmeContent = readmeContent.replace(
      /Toplamda \*\*<KATKI_SAYISI>\*\* adet katkıda bulundum\./,
      `Toplamda **${contributionsCount}** adet katkıda bulundum.`
    );

    fs.writeFileSync(readmePath, updatedReadmeContent);
    console.log('README.md güncellendi.');
  } catch (error) {
    console.error('Hata:', error.message);
  }
}

updateContributionsCount();
