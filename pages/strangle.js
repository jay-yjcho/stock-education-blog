import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import AdComponent from '../components/AdComponent';

export default function Strangle() {
  return (
    <Layout title="스트렝글 (Strangle) 전략">
      <Head>
        <title>스트렝글 (Strangle) 전략 - 주식 용어 백과사전</title>
        <meta name="description" content="주식 스트렝글 전략에 대한 상세 설명과 국내 종목 예시" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <article className="prose prose-blue max-w-none dark:prose-invert">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">스트렝글 (Strangle) 전략</h1>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">정의</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              스트렝글(Strangle)은 스트래들과 유사하지만 서로 다른 행사가격의 콜 옵션과 풋 옵션을 매수하는 전략입니다. 일반적으로 콜 옵션은 현재 주가보다 높은 가격, 풋 옵션은 현재 주가보다 낮은 가격의 옵션을 선택합니다. 이 전략은 스트래들보다 저렴한 비용으로 유사한 변동성 베팅을 할 수 있어 효율적인 전략입니다.
            </p>
          </div>
          
          <AdComponent slot="7894561236" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">특징</h2>
            <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base mb-6">
              <li><span className="font-semibold">낮은 비용:</span> 스트래들보다 저렴한 프리미엄으로 동일한 전략 구사 가능</li>
              <li><span className="font-semibold">변동성 베팅:</span> 주가 방향이 아닌 큰 변동성에 베팅</li>
              <li><span className="font-semibold">손익 구조:</span> 주가가 특정 범위를 벗어날 경우 수익 실현</li>
              <li><span className="font-semibold">손실 제한:</span> 최대 손실은 옵션 프리미엄 지불액으로 제한</li>
              <li><span className="font-semibold">시간가치 감소:</span> 여전히 시간가치 감소의 영향을 받음</li>
            </ul>
          </div>
          
          <AdComponent slot="7894561237" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">국내 HTS 라인업 상품 예시 (5개)</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              아래는 스트렝글 전략에 자주 활용되는 국내 대표 ETF 상품들입니다:
            </p>
            <ol className="list-decimal pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li><span className="font-semibold">TIGER 레버리지 (114800):</span> 코스피200 2배 레버리지 ETF로 변동성이 크고 방향성 없는 큰 움직임이 예상될 때 스트렝글 전략에 적합.</li>
              <li><span className="font-semibold">KODEX 인버스 (114810):</span> 코스피200 인버스 ETF로 시장 전반의 변동성에 베팅할 수 있어 스트렝글 전략에 활용 가능.</li>
              <li><span className="font-semibold">ACE WTIBrent crude (297450):</span> 원유 ETF로 지정학적 이슈나 공급변화에 민감하여 스트렝글 전략에 적합.</li>
              <li><span className="font-semibold">TIGER 유로선물 (234490):</span> 통화 ETF로 환율 변동성에 베팅할 수 있어 이벤트 시 큰 움직임이 예상됨.</li>
              <li><span className="font-semibold">KODEX 미국달러선물 (251460):</span> 달러화 ETF로 미국 정책 변화 등에 민감하게 반응하여 스트렝글 전략에 활용 가능.</li>
            </ol>
          </div>
          
          <AdComponent slot="7894561238" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">전략 구사 방법</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              1. <span className="font-semibold">옵션 선택:</span> 동일 종목의 서로 다른 행사가격 콜/풋 옵션 선택 (ATM 기준으로 OTM 옵션)
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              2. <span className="font-semibold">동시 매수:</span> 높은 행사가격 콜 옵션 + 낮은 행사가격 풋 옵션 매수
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              3. <span className="font-semibold">이벤트 대기:</span> 주가가 특정 방향으로 크게 움직이기를 기다림
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              4. <span className="font-semibold">수익:</span> 주가가 높은 행사가격 초과 시 콜 옵션 수익, 낮은 행사가격 미만 시 풋 옵션 수익
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              5. <span className="font-semibold">손실:</span> 주가가 두 행사가격 사이에 머무를 경우 두 옵션 모두 손실
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 gap-4 sm:gap-0">
            <Link href="/straddle">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm sm:text-base text-center sm:text-left">
                ← 이전 전략: 스트래들
              </a>
            </Link>
            <Link href="/iron-condor">
              <a className="btn-primary text-sm sm:text-base px-4 py-2">
                다음 전략: 아이언콘도 →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}