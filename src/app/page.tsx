import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import fs from 'fs';
import path from 'path';

const Home = () => {
  const markdownContent = fs.readFileSync(path.join(process.cwd(), 'src/app/data/aboutMe.md'), 'utf-8');
  return (
    <div className="MainPage">
      <header className="MainPage-header text-left bg-gray-800 h-16 flex flex-col items-left justify-center text-white">
        <div className="header flex h-16 items-center justify-start ml-10">
          <span className="title bold text-xl">NTakato</span>
          <a href="https://github.com/Ntakato">
            <img src='/GitHub-Mark-Light-32px.png' className="icon w-16 h-16 p-5" alt="Logo" />
          </a>
          <a href="https://twitter.com/pifaq">
            <img src='/Twitter-Social-Icon-Circle-Color.png' className="icon w-16 h-16 p-5" alt="Logo" />
          </a>
          <a href="https://qiita.com/Ntakato">
            <img src='/qiita-favicon.png' className="icon w-16 h-16 p-5" alt="Logo" />
          </a>
        </div>
      </header>

      <div className="Body mx-20">
        <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Home