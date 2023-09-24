import React from 'react';

interface IProps {
    label: string;
}

const Attention: React.FC<IProps> = ({ label }) => {
    const attentionP = 'text-3xl font-bold';
    const attentionUl = 'list-disc pl-10 w-auto whitespace-no-wrap';
    const attentionEm = 'not-italic underline';
    const attentionA = 'text-teal-600 underline';
    return (
        <div className="flex flex-col items-center justify-center">
            <p>{label}</p>
        </div>
    );
};

// export default Attention;
// .attention {
//     display: flex;
//     flex-direction: column;
//     gap: 16px;
//     justify-content: center;
//     align-items: center;
// }

// .attention p {
//     font-size: 28px;
//     font-weight: 700;
// }

// /* _base.cssでリセットされてるので最低限のcssだけここで付ける */
// .attention ul {
//     list-style-type: disc;
//     padding-left: 40px;
//     width: auto;
//     white-space: nowrap;
// }

// .attention em {
//     font-style: normal;
//     text-decoration: underline;
// }

// .attention a {
//     color: #0a9ba6;
//     text-decoration: underline;
// }
