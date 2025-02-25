"use client";
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image'


export default function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ハンバーガーメニューの状態管理

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <Head>
        <title>Ayu's Portfolio Web Page</title>
        <meta name="description" content="Portfolio of a Quantum Computing and AI Researcher" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/*  ロゴをシンプルなアイコンに変更  */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293A1 1 0 0110 3z" clipRule="evenodd" />
            </svg>
            <h1 className="text-xl font-semibold text-gray-700">Ayu's Portfolio</h1>
          </div>
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => setActiveTab('about')}
              className={`${activeTab === 'about' ? 'text-blue-600 font-semibold' : 'text-gray-600'} hover:text-blue-500 transition duration-300`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab('research')}
              className={`${activeTab === 'research' ? 'text-blue-600 font-semibold' : 'text-gray-600'} hover:text-blue-500 transition duration-300`}
            >
              Research
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`${activeTab === 'projects' ? 'text-blue-600 font-semibold' : 'text-gray-600'} hover:text-blue-500 transition duration-300`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('publications')}
              className={`${activeTab === 'publications' ? 'text-blue-600 font-semibold' : 'text-gray-600'} hover:text-blue-500 transition duration-300`}
            >
              Publications
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`${activeTab === 'contact' ? 'text-blue-600 font-semibold' : 'text-gray-600'} hover:text-blue-500 transition duration-300`}
            >
              Contact
            </button>
          </div>
          {/*  ハンバーガーメニューアイコンをよりモダンに  */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-500" onClick={() => setIsMenuOpen(!isMenuOpen)}> {/* クリックで状態を切り替え */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m4 6h-16" />
              </svg>
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <button
              onClick={() => { setActiveTab('about'); setIsMenuOpen(false); }}
              className={`${activeTab === 'about' ? 'text-blue-600 font-semibold' : 'text-gray-600'} block w-full text-left px-4 py-2 hover:bg-gray-100`}
            >
              About
            </button>
            <button
              onClick={() => { setActiveTab('research'); setIsMenuOpen(false); }}
              className={`${activeTab === 'research' ? 'text-blue-600 font-semibold' : 'text-gray-600'} block w-full text-left px-4 py-2 hover:bg-gray-100`}
            >
              Research
            </button>
            <button
              onClick={() => { setActiveTab('projects'); setIsMenuOpen(false); }}
              className={`${activeTab === 'projects' ? 'text-blue-600 font-semibold' : 'text-gray-600'} block w-full text-left px-4 py-2 hover:bg-gray-100`}
            >
              Projects
            </button>
            <button
              onClick={() => { setActiveTab('publications'); setIsMenuOpen(false); }}
              className={`${activeTab === 'publications' ? 'text-blue-600 font-semibold' : 'text-gray-600'} block w-full text-left px-4 py-2 hover:bg-gray-100`}
            >
              Publications
            </button>
            <button
              onClick={() => { setActiveTab('contact'); setIsMenuOpen(false); }}
              className={`${activeTab === 'contact' ? 'text-blue-600 font-semibold' : 'text-gray-600'} block w-full text-left px-4 py-2 hover:bg-gray-100`}
            >
              Contact
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-0">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              {/*  シンプルな丸いプロフィール画像  */}
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-400 mx-auto">
                <div className="w-full h-full bg-gray-300 pr-24">
                <Image
                  className='mt-24 scale-[4] md:scale-[3]'
                  src="/profile.jpg"
                  width={1000}
                  height={1000}
                  alt="Picture of the author"/>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                Quantum Researcher
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">鮎澤颯人 Hayato Ayuzawa</h1>
            <p className="text-xl text-gray-600 mb-8"> Quantum Annealing | Machine Learning | Large Language Models</p>
            <div className="space-y-4">
               {/* 情報をアイコン + テキストで整理 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Current Position</p>
                  <p className="font-medium text-gray-700">電気通信大学 三類電子工学プログラム</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Education</p>
                  <p className="font-medium text-gray-700">電気通信大学2025年入学</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Contact</p>
                  <p className="font-medium text-gray-700">X: @Ayu_x_dev</p>
                </div>
              </div>
            </div>
            {/*  ボタンをよりシンプルでモダンに */}
            <div className="mt-10 flex gap-6">
              <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition duration-300 shadow-md">
                Get in Touch
              </a>
              <a href="#research" className="bg-transparent hover:bg-blue-50 text-blue-500 px-8 py-3 rounded-full font-medium transition duration-300 border border-blue-500">
                View Research
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-16 bg-white ${activeTab !== 'about' ? 'hidden' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mb-10"></div>
          <div className="rounded-2xl p-8 shadow-md">
             {/*  段落をより読みやすく */}
            <div className="text-gray-600 mb-6 leading-relaxed">
              鮎澤颯人は大宮北高校理数科を卒業し、2025年4月から電気通信大学情報理工学域 三類に進学します。AIと量子コンピューティングに興味を持ち始め、特に大規模言語モデル（LLM）の分野に関心を持っています。
              <p>
              大関真之先生の量子コンピューティング講座（QC4U、QA4U2、QC4U2、QA4U3）に参加する機会があり、そこで学んだことをきっかけに、量子アニーリングを使った時間割作成の効率化、自動化に関する研究を実施し、東北大学の研究室で発表しました。
              </p>
              <p>
              また、AIや機械学習ではAIモデルの精度を競うシンギュラリティバトルクエストという大会に参加し、2年連続で埼玉県代表になりました。
              </p>
              <p>加えて、複数のソフトウェアやwebアプリを開発しており、量子コンピューターと外部のmap apiを活用して経路最適化を行うアプリや小さなC compilerなども作成経験がある。</p>
              <p>まだまだ勉強中の身ですが、これからもAIと量子コンピューティングの研究や勉強を続けて次世代の情報社会への貢献を目指しています。</p>
            </div>

            <h3 className="text-2xl font-semibold mt-12 mb-6 text-gray-800">Technical Skills</h3>
            {/*  スキルをカード形式で表示 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <h4 className="font-medium text-gray-700">Quantum Computing</h4>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 ml-5 list-disc">
                  <li>Quantum Annealing</li>
                  <li>Quantum Circuits</li>
                  <li>QUBO Formulation</li>
                  <li>BlackBox Optimization</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                  <h4 className="font-medium text-gray-700">AI/ML</h4>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 ml-5 list-disc">
                  <li>Deep Learning</li>
                  <li>NLP/LLMs</li>
                  <li>Machine Learning & Finance</li>
                  <li>CNN Architecture</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <h4 className="font-medium text-gray-700">Programming</h4>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 ml-5 list-disc">
                  <li>Python</li>
                  <li>PyTorch/TensorFlow</li>
                  <li>Qiskit</li>
                  <li>OpenJij</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                  <h4 className="font-medium text-gray-700">Other</h4>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 ml-5 list-disc">
                  <li>Typescript</li>
                  <li>C</li>
                  <li>React/Nextjs</li>
                  <li>Django/Fastapi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className={`py-16  ${activeTab !== 'research' ? 'hidden' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Research Focus</h2>
          <div className="w-24 h-1 bg-blue-500 mb-10"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {/*  リサーチ項目をカード形式で、アイコン付きで表示 */}
            <div className="bg-white rounded-2xl p-8 shadow-md transition transform hover:scale-105 hover:shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 14a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Quantum Annealing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
               量子アニーリングを用いて現実にある課題を解決する。
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  時間割作成の自動化・効率化
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  ブラックボックス最適化によるLLMマージの最適化の提案
                </li>

              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md transition transform hover:scale-105 hover:shadow-lg">
               <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-6">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-700">大規模言語モデル</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                従来に比べて小さい規模の言語モデルによる効率的な動作について研究している。
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  LLMの最適化
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  次のTransformerになるアーキテクチャについての検討
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md transition transform hover:scale-105 hover:shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                 <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-700">ソフトウェア開発</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                C compilerや便利なwebアプリを初め様々なアプリソフトウェアを開発しています。
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  非常に小さなC compilerの開発
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Nextjs/Fastapiなどを用いたwebアプリ開発
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
       <section className={`py-16 bg-white ${activeTab !== 'projects' ? 'hidden' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mb-10"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* プロジェクトカード */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden transition transform hover:scale-102">
              <div className="h-56 bg-gradient-to-r from-blue-400 to-indigo-500 relative">
                {/* プロジェクトの画像やアイコンをここに追加 */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
              </div>
              <div className="p-6">
                <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-600 rounded-full">Quantum Annealing</span>
                <h3 className="text-xl font-bold mt-4 mb-3 text-gray-700">量子アニーリングによる時間割作成の自動化・効率化</h3>
                <p className="text-gray-500 mb-6">
                  複数の条件の考慮や大規模であることから多いな労力を必要とする時間割作成を量子アニーリングを活用して自動化
                </p>
                 {/* タグをシンプルに */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 text-xs bg-gray-200 text-gray-600 rounded-md">Python</span>
                  <span className="px-2 py-1 text-xs bg-gray-200 text-gray-600 rounded-md">D-Wave Ocean</span>
                </div>
                {/* リンクボタンをシンプルに */}
                <div className="flex justify-between items-center">
                    <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">View Project →</a>
                    <div className="flex gap-3">
                      {/* GitHub, Website アイコン */}
                    </div>
                </div>
              </div>
            </div>
             {/* プロジェクトカード */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden transition transform hover:scale-102">
              <div className="h-56 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 relative">
                {/* プロジェクトの画像やアイコンをここに追加 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <span className="px-3 py-1 text-xs font-semibold bg-purple-100 text-purple-600 rounded-full">Software Development</span>
                <h3 className="text-xl font-bold mt-4 mb-3 text-gray-700">小さなC Compiler</h3>
                <p className="text-gray-500 mb-6">
                   読みやすく、シンプルなCコンパイラの開発
                </p>
                {/* タグをシンプルに */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 text-xs bg-gray-200 text-gray-600 rounded-md">C</span>
                  <span className="px-2 py-1 text-xs bg-gray-200 text-gray-600 rounded-md">Make</span>
                  <span className="px-2 py-1 text-xs bg-gray-200 text-gray-600 rounded-md">Bash</span>
                </div>
               {/* リンクボタンをシンプルに */}
                <div className="flex justify-between items-center">
                  <a href="#" className="text-purple-500 hover:text-purple-600 font-medium">Coming soon</a>
                  <div className="flex gap-3">
                      {/* GitHub, Website アイコン */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className={`py-16 ${activeTab !== 'publications' ? 'hidden' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Selected Publications</h2>
          <div className="w-24 h-1 bg-blue-500 mb-10"></div>

          <div className="space-y-8">
             {/* 論文アイテム */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">"sample paper"</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    <span className="font-medium">conference name</span>, 2023
                  </p>
                </div>
                <a href="#" className="text-blue-500 hover:text-blue-600 font-medium whitespace-nowrap">
                  Read Paper →
                </a>
              </div>
              <p className="text-gray-600 mt-4 leading-relaxed">
                説明やイントロダクション
              </p>
               {/* タグ */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 text-xs bg-gray-200 text-gray-600 rounded-md">LLM</span>
                <span className="px-2 py-1 text-xs bg-gray-200 text-gray-600 rounded-md">Tensor Networks</span>
              </div>
            </div>

            {/* 論文アイテム */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">"sample paper"</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    <span className="font-medium">conference name</span>, 2023
                  </p>
                </div>
                <a href="#" className="text-blue-500 hover:text-blue-600 font-medium whitespace-nowrap">
                  Read Paper →
                </a>
              </div>
              <p className="text-gray-600 mt-4 leading-relaxed">
                説明やイントロダクション
              </p>
               {/* タグ */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 text-xs bg-gray-200 text-gray-600 rounded-md">LLM</span>
                <span className="px-2 py-1 text-xs bg-gray-200 text-gray-600 rounded-md">Tensor Networks</span>
              </div>
            </div>

            {/* 論文アイテム */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">"sample paper"</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    <span className="font-medium">conference name</span>, 2023
                  </p>
                </div>
                <a href="#" className="text-blue-500 hover:text-blue-600 font-medium whitespace-nowrap">
                  Read Paper →
                </a>
              </div>
              <p className="text-gray-600 mt-4 leading-relaxed">
                説明やイントロダクション
              </p>
               {/* タグ */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 text-xs bg-gray-200 text-gray-600 rounded-md">LLM</span>
                <span className="px-2 py-1 text-xs bg-gray-200 text-gray-600 rounded-md">Tensor Networks</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
       <section className={`py-16 bg-white ${activeTab !== 'contact' ? 'hidden' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Contact</h2>
          <div className="w-24 h-1 bg-blue-500 mb-10"></div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-700">Get in Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always open to discussing new research collaborations, potential projects, or speaking opportunities.
              </p>
              <div className="space-y-6">
                 {/* 連絡先情報 */}
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                       <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="font-medium text-gray-700">Coming Soon</p>
                  </div>
                </div>
                {/* ソーシャルメディアリンク (アイコンのみ) */}
                <div className="flex gap-6">
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://x.com/Ayu_x_dev" className="text-gray-500 hover:text-blue-600" aria-label="X">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272.91-.175 1.782-.512 2.556-.973a4.02 4.02 0 0 1-1.8 2.166c.824-.088 1.619-.312 2.319-.624a8.08 8.08 0 0 0-2.086 1.882z"/>
                      </svg>
                  </a>
                  <a href="https://github.com/ayu811" className="text-gray-500 hover:text-blue-600" aria-label="GitHub">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* コンタクトフォーム */}
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
                  <input type="text" id="name" className="mt-1 block w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                  <input type="email" id="email" className="mt-1 block w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message</label>
                  <textarea id="message" className="mt-1 block w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required></textarea>
                </div>
                {/* 送信ボタン */}
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition duration-300 shadow-md">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} Hayato Ayuzawa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}