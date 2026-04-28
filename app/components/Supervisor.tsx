export default function Supervisor() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
      <h3 className="text-sm font-bold text-blue-700 mb-3 uppercase tracking-wide">監修者情報</h3>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-200 flex items-center justify-center text-2xl font-bold text-blue-700">
          佐
        </div>
        <div>
          <p className="font-bold text-gray-900 text-base">佐藤 健一（さとう けんいち）</p>
          <p className="text-sm text-blue-600 font-medium mb-2">ファイナンシャルプランナー（FP1級）</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            大手銀行で15年の勤務経験。個人向け金融商品の審査・企画に携わった後、独立。現在は金融教育の専門家として活動。先払い買取を含むファイナンシャルサービスの安全性評価を専門に行う。
          </p>
        </div>
      </div>
    </div>
  )
}
