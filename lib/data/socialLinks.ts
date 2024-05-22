import fs from 'fs';
import path from 'path';

type SocialLinks = {
  facebook: string;
  twitter: string;
  instagram: string;
  pinterest: string;
};

const filePath = path.join(process.cwd(), 'lib/data/socialLinks.json');

export function readSocialLinks(): SocialLinks {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

export function writeSocialLinks(links: SocialLinks): void {
  fs.writeFileSync(filePath, JSON.stringify(links, null, 2));
}
