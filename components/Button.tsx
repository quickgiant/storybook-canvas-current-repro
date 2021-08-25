export interface ButtonProps {
    text: string;
    textColor: string;
}

export default function Button({ text, textColor }: ButtonProps) {
    return <button style={{ color: textColor }}>{text}</button>;
}