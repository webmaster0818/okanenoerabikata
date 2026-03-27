import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'

const companies = [
  {
    rank: 1,
    id: 'ticket-center',
    name: 'チケットセンター',
    url: 'https://ticket-center.jp/',
    advanceRate: '65%~',
    mailRate: '最大95%',
    speed: '最短10分',
    amount: '1万円～10万円',
    products: '商品券',
    license: '東京都公安委員会 第303292220992号',
    points: ['業界最高水準の買取率', '即日振込対応', '24時間WEB受付']
  },
  {
    rank: 2,
    id: 'sheep-ticket',
    name: 'シープチケット',
    url: 'https://s-ticket-a-bce.net/',
    advanceRate: '60%',
    mailRate: '70%',
    speed: '最短5分',
    amount: '1万円～30万円',
    products: '商品券、ギフトカード',
    license: '東京都公安委員会 第301032316079号',
    points: ['LINE完結', '最短5分で即日入金', '4つの買取方法']
  },
  {
    rank: 3,
    id: 'turtle-ticket',
    name: 'タートルチケット',
    url: 'https://turtle-ticket.com/',
    advanceRate: '60~80%',
    mailRate: '90%',
    speed: '最短10分',
    amount: '1万円～30万円',
    products: '商品券、ギフト券',
    license: '東京都公安委員会 第301032316079号',
    points: ['即査定・即振込', '高額買取', '年中無休']
  },
  {
    rank: 4,
    id: 'reset-ticket',
    name: 'リセチケット',
    url: 'https://reseticke.com/',
    advanceRate: '最大65%',
    mailRate: '最大90%',
    speed: '最短15分',
    amount: '1万円～30万円',
    products: '商品券、VJAギフトカード',
    license: '東京都公安委員会 第303292220992号',
    points: ['相見積もり歓迎', '24時間営業', 'LINE完結']
  }
]

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* パンくずリスト */}
      <Breadcrumb items={[
        { name: '業者比較・ランキング', url: '/comparison' }
      ]} />

      <main className="container mx-auto px-4 py-8">
        {/* 注意喚起 */}
        <div className="warning-box mb-8">
          <p className="text-sm font-semibold text-gray-800">
            ⚠️ 本サイトは、先払い買取サービスの利用を推奨するものではありません。あくまで情報提供と注意喚起を目的としており、取引の可否や判断は利用者ご自身の責任においておこなってください。
          </p>
        </div>

        {/* ランキング形式の比較 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">おすすめランキング TOP4</h2>
          
          <div className="bg-amber-50 border-2 border-amber-400 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-800">
              ※以下の内容は、各業者の公式サイトに掲載されている情報を引用・整理したものであり、当サイトが各業者の適法性・安全性・将来にわたる健全な運営を保証するものではありません。
            </p>
          </div>

          <div className="space-y-6">
            {companies.map((company) => (
              <div key={company.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                        {company.rank}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{company.name}</h3>
                        <p className="text-sm opacity-90">古物商許可: {company.license}</p>
                      </div>
                    </div>
                    <a 
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    >
                      公式サイト →
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-600">先払い買取率</div>
                      <div className="text-xl font-bold text-blue-600">{company.advanceRate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">郵送買取率</div>
                      <div className="text-xl font-bold text-blue-600">{company.mailRate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">入金スピード</div>
                      <div className="text-xl font-bold text-blue-600">{company.speed}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">買取可能金額</div>
                      <div className="text-lg font-semibold">{company.amount}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">対応商品</div>
                      <div className="text-lg font-semibold">{company.products}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold mb-2">おすすめポイント</h4>
                    <div className="flex flex-wrap gap-2">
                      {company.points.map((point, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link 
                      href={`/articles/${company.id}`}
                      className="text-blue-600 hover:text-blue-800 underline font-semibold"
                    >
                      詳細情報を見る →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 比較表 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">業者比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">ランク</th>
                  <th className="px-4 py-3 text-left">業者名</th>
                  <th className="px-4 py-3 text-left">先払い買取率</th>
                  <th className="px-4 py-3 text-left">郵送買取率</th>
                  <th className="px-4 py-3 text-left">スピード</th>
                  <th className="px-4 py-3 text-left">買取可能額</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company, index) => (
                  <tr key={company.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-bold text-blue-600">{company.rank}位</td>
                    <td className="px-4 py-3 font-semibold">{company.name}</td>
                    <td className="px-4 py-3">{company.advanceRate}</td>
                    <td className="px-4 py-3">{company.mailRate}</td>
                    <td className="px-4 py-3">{company.speed}</td>
                    <td className="px-4 py-3 text-sm">{company.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 選び方のポイント */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">優良業者を見抜くポイント</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-2">1. 古物商許可を確認する</h3>
              <p className="text-gray-700">
                公式サイトに古物商許可番号が明記されているか確認しましょう。許可番号がない業者は違法な可能性があります。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">2. 契約内容が明確か</h3>
              <p className="text-gray-700">
                買取金額、商品の発送期限、条件を守れなかった場合の対応など、取引に関する重要な内容が開示されているか確認しましょう。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">3. 運営会社情報が明確か</h3>
              <p className="text-gray-700">
                運営会社名・所在地・電話番号などの会社情報が明示されているか確認しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* 注意喚起（下部） */}
        <div className="warning-box">
          <h3 className="font-bold mb-2">⚠️ 悪質な業者にご注意ください</h3>
          <p className="text-sm text-gray-800">
            買取契約のキャンセルを前提としたサービスを提供し高額なキャンセル料を請求する、悪質な取り立てや個人情報を悪用するなど、先払い買取の仕組みを悪用した違法な業者が存在しています。
            こうしたトラブルを避けるためにも、利用の際は契約内容をよく確認し十分に検討を行ってください。
          </p>
          <p className="text-sm text-gray-800 mt-2">
            参考：<a href="https://www.fsa.go.jp/ordinary/chuui/cashing_chuui2.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">金融庁 注意喚起</a>
          </p>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2026 お金の選び方研究所 - 先払い買取比較サイト</p>
          <div className="mt-4 space-x-4 text-sm">
            <Link href="/privacy" className="hover:text-gray-300">プライバシーポリシー</Link>
            <Link href="/faq" className="hover:text-gray-300">よくある質問</Link>
            <Link href="/" className="hover:text-gray-300">トップページ</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
