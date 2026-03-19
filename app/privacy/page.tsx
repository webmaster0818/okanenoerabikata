import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-2 inline-block">
            ← トップページに戻る
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            プライバシーポリシー
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            個人情報の取り扱いについて
          </p>
          
          {/* ナビゲーション */}
          <nav className="mt-4 border-t pt-4">
            <ul className="flex flex-wrap gap-4 text-sm">
              <li><Link href="/" className="text-gray-700 hover:text-blue-600">トップ</Link></li>
              <li><Link href="/comparison" className="text-gray-700 hover:text-blue-600">業者比較</Link></li>
              <li><Link href="/faq" className="text-gray-700 hover:text-blue-600">FAQ</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* パンくずリスト */}
      <Breadcrumb items={[
        { name: 'プライバシーポリシー', url: '/privacy' }
      ]} />

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. 基本方針</h2>
            <p className="text-gray-700 leading-relaxed">
              お金の選び方研究所（以下「当サイト」といいます）は、ご利用者様の個人情報保護の重要性について認識し、個人情報の保護に関する法律（以下「個人情報保護法」といいます）を遵守すると共に、以下のプライバシーポリシー（以下「本ポリシー」といいます）に従い、適切な取扱い及び保護に努めます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. 個人情報の定義</h2>
            <p className="text-gray-700 leading-relaxed">
              本ポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報、すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます）、もしくは個人識別符号が含まれる情報を意味するものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. 個人情報の利用目的</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当サイトでは、以下の目的で個人情報を利用いたします。
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>お問い合わせへの対応のため</li>
              <li>サイト運営に関する情報の提供のため</li>
              <li>サービスの改善・向上のため</li>
              <li>統計データの作成のため</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. 個人情報の第三者提供</h2>
            <p className="text-gray-700 leading-relaxed">
              当サイトは、以下の場合を除き、ご本人の同意を得ることなく、第三者に個人情報を提供することはありません。
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難である場合</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、ご本人の同意を得ることが困難である場合</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Cookieの使用について</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当サイトでは、ユーザーの利便性向上やサイトの改善のために、Cookieを使用する場合があります。Cookieとは、ウェブサイトがユーザーのコンピュータに一時的にデータを保存する仕組みです。
            </p>
            <p className="text-gray-700 leading-relaxed">
              ユーザーはブラウザの設定により、Cookieの受け取りを拒否することができます。ただし、Cookieを無効にした場合、サイトの一部機能が正常に動作しない可能性があります。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. アクセス解析ツールについて</h2>
            <p className="text-gray-700 leading-relaxed">
              当サイトでは、サイトの利用状況を把握するため、Google Analyticsなどのアクセス解析ツールを使用する場合があります。これらのツールは、Cookieを使用してユーザーの情報を収集しますが、個人を特定する情報は含まれません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. 免責事項</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当サイトは、先払い買取サービスに関する情報提供を目的としており、特定のサービスの利用を推奨するものではありません。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              当サイトに掲載されている情報は、各業者の公式サイトから引用したものですが、その正確性、完全性、有用性について保証するものではありません。
            </p>
            <p className="text-gray-700 leading-relaxed">
              先払い買取サービスの利用に際しては、ご自身の責任において判断してください。当サイトは、サービス利用に起因するいかなる損害についても責任を負いません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. プライバシーポリシーの変更</h2>
            <p className="text-gray-700 leading-relaxed">
              当サイトは、法令の変更等に伴い、本ポリシーを予告なく変更する場合があります。変更後のプライバシーポリシーは、当サイト上に掲載した時点で効力を生じるものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. お問い合わせ</h2>
            <p className="text-gray-700 leading-relaxed">
              本ポリシーに関するお問い合わせは、各業者の公式サイトまたは消費生活センター（188）までお願いいたします。
            </p>
          </section>

          <div className="mt-8 pt-8 border-t border-gray-300">
            <p className="text-sm text-gray-600">
              最終更新日：2026年3月12日
            </p>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2026 お金の選び方研究所 - 先払い買取比較サイト</p>
          <div className="mt-4 space-x-4 text-sm">
            <Link href="/faq" className="hover:text-gray-300">よくある質問</Link>
            <Link href="/" className="hover:text-gray-300">トップページ</Link>
            <Link href="/comparison" className="hover:text-gray-300">比較・ランキング</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
