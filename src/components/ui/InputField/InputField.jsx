import { createContext, useContext } from 'react';

const InputFieldContext = createContext();

export const useInputFieldContext = () => {
  const context = useContext(InputFieldContext);
  if (!context) {
    throw new Error('InputField 컴포넌트 내부에서만 사용해야 합니다.');
  }
  return context;
};

const InputField = ({
  type = 'text',
  placeholder = '',
  children,
  value,
  onChange,
  ...props
}) => {
  return (
    <InputFieldContext.Provider value={{ value, onChange }}>
      <div className="search">
        <div className="input-wrap">
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...props}
          />
          {children}
        </div>
      </div>
    </InputFieldContext.Provider>
  );
};

const InputFieldButton = ({ children, onClick, ...props }) => {
  const { value } = useInputFieldContext();
  return (
    <button type="button" onClick={() => onClick?.(value)} {...props}>
      {children}
    </button>
  );
};

InputField.Button = InputFieldButton;

// DisplayName 설정
InputFieldButton.displayName = 'InputField.Button';

export default InputField;
