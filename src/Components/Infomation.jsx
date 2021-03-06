import React from 'react'
export default function Infomation({ steps }) {
    return (
        <div className='w-full'>
            <div className='flex justify-between w-full py-4 px-6 border-b border-gray-200 items-center'>
                <button onClick={() => steps(1)} className='relative'>
                    <svg className='w-6 h-6' viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.8065 14.38C12.5118 14.671 12.5088 15.1459 12.7999 15.4406C13.0909 15.7353 13.5658 15.7383 13.8605 15.4472L12.8065 14.38ZM20.8605 8.53361C21.1552 8.24254 21.1582 7.76768 20.8671 7.47297C20.576 7.17826 20.1012 7.17531 19.8065 7.46638L20.8605 8.53361ZM19.8065 8.53361C20.1012 8.82468 20.576 8.82173 20.8671 8.52702C21.1582 8.23231 21.1552 7.75745 20.8605 7.46638L19.8065 8.53361ZM13.8605 0.552799C13.5658 0.261731 13.091 0.264681 12.7999 0.559387C12.5088 0.854095 12.5118 1.32896 12.8065 1.62003L13.8605 0.552799ZM20.3335 8.74999C20.7477 8.74999 21.0835 8.41421 21.0835 7.99999C21.0835 7.58578 20.7477 7.24999 20.3335 7.24999V8.74999ZM1.66683 7.24999C1.25261 7.24999 0.916828 7.58578 0.916828 7.99999C0.916828 8.41421 1.25261 8.74999 1.66683 8.74999V7.24999ZM13.8605 15.4472L20.8605 8.53361L19.8065 7.46638L12.8065 14.38L13.8605 15.4472ZM20.8605 7.46638L13.8605 0.552799L12.8065 1.62003L19.8065 8.53361L20.8605 7.46638ZM20.3335 7.24999L1.66683 7.24999V8.74999L20.3335 8.74999V7.24999Z" fill="#2B2B2B" />
                    </svg>
                </button>
                <div className='relative sans-bolish'>شرایط و قوانین</div>
                <div></div>
            </div>
            <div className='mt-4 p-6'>
                <h1 className='sans-bold text-xss'>شرایط و قوانین استفاده از نرم افزار کال باس</h1>
                <p className='text-xss mt-4 font-normal'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </p>
                <h1 className='mt-4 sans-bold text-xss'>ماده ۱ : لورم ایپسوم</h1>
                <p className='text-xss mt-4 font-normal'>
                <strong className='ml-1 sans-bold'>1-1- </strong>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </p>
                <p className='text-xss mt-4 font-normal'>
                <strong className='ml-1 sans-bold'>1-2- </strong>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </p>
                <p className='text-xss mt-4 font-normal'>
                <strong className='ml-1 sans-bold text-ellipsis'>تبصره</strong>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </p>
            </div>
        </div>
    )
}
