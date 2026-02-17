const Footer = () => {
    return (
        <footer className='py-6 md:px-8 md:py-10 bg-black text-white border-t border-gray-800'>
            <div className='max-w-6xl mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
                <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
                    Questions? Call <a href='tel:000-800-919-1694' className='underline'>000-800-919-1694</a>
                </p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-center md:text-left'>
                    <ul className='space-y-2'>
                        <li><a href='#' className='hover:underline'>FAQ</a></li>
                        <li><a href='#' className='hover:underline'>Investor Relations</a></li>
                        <li><a href='#' className='hover:underline'>Privacy</a></li>
                        <li><a href='#' className='hover:underline'>Speed Test</a></li>
                    </ul>
                    <ul className='space-y-2'>
                        <li><a href='#' className='hover:underline'>Help Center</a></li>
                        <li><a href='#' className='hover:underline'>Jobs</a></li>
                        <li><a href='#' className='hover:underline'>Cookie Preferences</a></li>
                        <li><a href='#' className='hover:underline'>Legal Notices</a></li>
                    </ul>
                    <ul className='space-y-2'>
                        <li><a href='#' className='hover:underline'>Account</a></li>
                        <li><a href='#' className='hover:underline'>Ways to Watch</a></li>
                        <li><a href='#' className='hover:underline'>Corporate Information</a></li>
                        <li><a href='#' className='hover:underline'>Only on Netflix</a></li>
                    </ul>
                    <ul className='space-y-2'>
                        <li><a href='#' className='hover:underline'>Media Center</a></li>
                        <li><a href='#' className='hover:underline'>Terms of Use</a></li>
                        <li><a href='#' className='hover:underline'>Contact Us</a></li>
                    </ul>
                </div>
                <button className='border border-gray-600 px-4 py-2 text-sm bg-black text-white mt-4 md:mt-0'>English</button>
            </div>
            <p className='text-sm text-center mt-6 text-muted-foreground'>Netflix India</p>
        </footer>
    );
};
export default Footer;
