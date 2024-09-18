import React, { useCallback, useState} from "react";
import styled from "styled-components";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /**
     * 最小行数
     */
    minRows?: number
    /**
     * 最大行数
     */
    maxRows?: number
    /**
     * バリデーションフラグ
     */
    hasError?: boolean
}
/**
 * スタイルを適用
 */
const StyledTextArea = styled.textarea< { hasError?: boolean } >`
    color: ${({ theme }) => theme.colors.InputText};
    border: 1px solid
        ${({ theme, hasError }) => 
            hasError ? theme.colors.danger : theme.colors.border};
    border-radium: 5px;
    box-sizing: border-box;
    outline: none;
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    padding: 9px 12px 10px 12px;
    resize: none;
    overflow: auto;
    height: auto;

    &::placeholder {
        color: ${({ theme }) => theme.colors.placeholder};
    }
`
/**
 * テキストエリア
 */
const TextArea = (props: TextAreaProps) => {
    const {
        rows = 5,
        minRows = 5,
        maxRows = 10,
        children,
        hasError,
        onChange,
        ...rest
    } = props
    const [textAreaRows, setTextAreaRows] = useState(Math.min(rows, minRows))

    // 最低の行より未満指定しないようにする
    console.assert(
        !(rows < minRows),
        'TextArea: rows should be greater than minRows.'
    )

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textAreaLineHeight = 24
        const previousRows = e.target.rows

        e.target.rows = minRows // 行数のリセット

        // 現在の行数
        const currentRows = Math.floor(e.target.scrollHeight / textAreaLineHeight)

        if (currentRows === previousRows) {
            e.target.rows = currentRows
        }

        if (currentRows >= maxRows) {
            e.target.rows = maxRows
            e.target.scrollTop = e.target.scrollHeight
        }

        // 最大を超えないように行数をリセット
        setTextAreaRows(currentRows < maxRows ? currentRows : maxRows)
        onChange && onChange(e)
        },
        [onChange, minRows, maxRows]
    )

    return (
        <StyledTextArea
            hasError={hasError}
            onChange={handleChange}
            aria-label={rest.placeholder}
            rows={textAreaRows}
            {...rest}
            >
            {children}
            </StyledTextArea>
    )
}

TextArea.defaultProps = {
    rows: 5,
    minRows: 5,
    maxRows: 10,
}

export default TextArea
