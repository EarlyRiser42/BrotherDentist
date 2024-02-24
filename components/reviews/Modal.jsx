import { LogoEn, LogoKo } from '@/components/Icons/Logos';
export default function Modal({ lang, onClose }) {
    return (
        <div className="w-screen h-100dvh bg-gray_800 dark:bg-gray flex justify-center items-center">
            <div className="w-96/100 h-80 bg-white dark:bg-black sm:w-586 sm:h-72 rounded-3xl flex flex-col justify-between items-center">
                <div className="w-11/12 mt-5 mx-auto h-1/20 flex justify-center">
                    {lang === 'ko' ? <LogoKo /> : <LogoEn />}
                </div>
                <div className="px-2 whitespace-pre-wrap text-center">
                    {lang === 'ko'
                        ? '의료법 56조에 의거해 ' +
                          '\n' +
                          '로그인 후 이용 가능한 서비스입니다.'
                        : 'The service is available after login in ' +
                          '\n' +
                          'accordance with Article 56 of the Medical Act.'}
                </div>
                <button
                    onClick={onClose}
                    className="mb-5 bg-black dark:bg-white text-white dark:text-black rounded-3xl w-4/5 h-12 hover:bg-opacity-80"
                >
                    {lang === 'ko' ? '확인' : 'Confirm'}
                </button>
            </div>
        </div>
    );
}
