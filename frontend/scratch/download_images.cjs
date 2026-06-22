const fs = require('fs');
const path = require('path');
const https = require('https');

const portraitIds = [
    "photo-1534528741775-53994a69daeb", // F
    "photo-1539571696357-5a69c17a67c6", // M
    "photo-1507003211169-0a1dd7228f2d", // M
    "photo-1494790108377-be9c29b29330", // F
    "photo-1500648767791-00dcc994a43e", // M
    "photo-1517841905240-472988babdf9", // F
    "photo-1501196354995-cbb51c65aaea", // M
    "photo-1522075469751-3a6694fb2f61", // M
    "photo-1544005313-94ddf0286df2", // F
    "photo-1488426862026-3ee34a7d66df", // F
    "photo-1531746020798-e6953c6e8e04", // F
    "photo-1492562080023-ab3db95bfbce", // M
    "photo-1534308983496-4fabb1a015ee", // M
    "photo-1506794778202-cad84cf45f1d", // M
    "photo-1524504388940-b1c1722653e1", // F
    "photo-1554151228-14d9def656e4", // F
    "photo-1580489944761-15a19d654956", // F
    "photo-1607746882042-944635dfe10e", // F
    "photo-1508214751196-bcfd4ca60f91", // F
    "photo-1438761681033-6461ffad8d80", // F
    "photo-1544005313-94ddf0286df2", // F (was photo-1619946794135-5bc917a26793)
    "photo-1519085360753-af0119f7cbe7", // M
    "photo-1494790108377-be9c29b29330", // F (was photo-1628157582853-a796fa650a6a)
    "photo-1472099645785-5658abf4ff4e", // M
    "photo-1529626455594-4ff0802cfb7e", // F
    "photo-1573496359142-b8d87734a5a2", // F
    "photo-1534528741775-53994a69daeb", // F (was photo-1534751516642-a131ffd10b7f)
    "photo-1548142813-c348350df52b", // F
    "photo-1566492031773-4f4e44671857", // M
    "photo-1500648767791-00dcc994a43e", // M (was photo-1504257404282-b360b1e0f438)
    "photo-1614283233556-f35b0c801ef1", // M
    "photo-1601412436009-d964bd02edbc", // F
    "photo-1567532939604-b6b5b0db2604", // F
    "photo-1552058544-f2b08422138a", // M
    "photo-1506794778202-cad84cf45f1d"  // M
];

const targetDir = path.join(__dirname, '..', 'public', 'assets', 'students');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

function downloadImage(url, destPath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(destPath);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download image: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(destPath, () => {});
            reject(err);
        });
    });
}

async function main() {
    console.log(`Starting image downloads. Target directory: ${targetDir}`);
    for (let i = 0; i < portraitIds.length; i++) {
        const id = portraitIds[i];
        const isNeet = i < 22;
        const indexNum = isNeet ? (i + 1) : (i - 22 + 1);
        const filename = isNeet ? `neet-${indexNum}.jpg` : `board-${indexNum}.jpg`;
        const destPath = path.join(targetDir, filename);
        const url = `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=300&h=300`;
        
        console.log(`Downloading ${url} -> ${filename}...`);
        try {
            await downloadImage(url, destPath);
            console.log(`Successfully downloaded ${filename}`);
        } catch (err) {
            console.error(`Failed to download ${filename}:`, err.message);
        }
        await new Promise(r => setTimeout(r, 100));
    }
    console.log("All downloads completed!");
}

main().catch(console.error);
