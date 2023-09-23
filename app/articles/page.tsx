'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Articles = () => {
    const articles = [
        { id: 1, title: 'hoge' },
        { id: 2, title: 'fuga' }
    ];

    const pathname = usePathname();
    return (
        <>
            <div>
                一覧
                <ul>
                    {articles.map((a) => (
                        <li key={a.id}>
                            <Link href={`${pathname}/${a.id}`}>タイトル</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Articles;
