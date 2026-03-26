'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* ハンバーガーアイコン */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 left-4 z-50 w-12 h-12 bg-yellow-500 rounded-lg flex flex-col items-center justify-center gap-1.5 hover:bg-yellow-400 transition-colors shadow-lg"
        aria-label="メニュー"
      >
        <span className={`w-7 h-0.5 bg-slate-900 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-7 h-0.5 bg-slate-900 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-7 h-0.5 bg-slate-900 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* オーバーレイ */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* サイドメニュー */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-slate-800 text-white z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 pt-20">
          <h2 className="text-2xl font-bold mb-6 text-yellow-400">メニュー</h2>
          
          <nav className="space-y-2">
            {/* トップ */}
            <Link
              href="/"
              onClick={closeMenu}
              className="block px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors"
            >
              🏠 トップページ
            </Link>

            {/* 業者比較 */}
            <Link
              href="/comparison"
              onClick={closeMenu}
              className="block px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors"
            >
              📊 業者比較
            </Link>

            {/* 主要記事 */}
            <div className="pt-4">
              <h3 className="text-sm font-bold text-slate-400 px-4 mb-2">主要記事</h3>
              
              <Link
                href="/articles/what-is-advance-purchase"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                📖 先払い買取とは？
              </Link>
              
              <Link
                href="/articles/recommended-ranking-2026"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                ⭐ おすすめランキング
              </Link>
              
              <Link
                href="/articles/safe"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                🛡️ 安全に現金化する方法
              </Link>
              
              <Link
                href="/articles/scam"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                ⚠️ 詐欺手口と見分け方
              </Link>
              
              <Link
                href="/articles/dangerous"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                🚨 先払い買取は危険？
              </Link>
            </div>

            {/* 業者詳細 */}
            <div className="pt-4">
              <h3 className="text-sm font-bold text-slate-400 px-4 mb-2">業者詳細</h3>
              
              <Link
                href="/articles/sheep-ticket"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                🐑 シープチケット
              </Link>
              
              <Link
                href="/articles/ticket-center"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                🎫 チケットセンター
              </Link>
              
              <Link
                href="/articles/turtle-ticket"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                🐢 タートルチケット
              </Link>
              
              <Link
                href="/articles/reset-ticket"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                🔄 リセチケット
              </Link>
            </div>

            {/* FAQ・その他 */}
            <div className="pt-4">
              <h3 className="text-sm font-bold text-slate-400 px-4 mb-2">その他</h3>
              
              <Link
                href="/faq"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                ❓ よくある質問
              </Link>
              
              <Link
                href="/privacy"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                🔒 プライバシーポリシー
              </Link>
            </div>
          </nav>
        </div>
      </aside>
    </>
  )
}
