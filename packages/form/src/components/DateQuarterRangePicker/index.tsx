import { dateArrayFormatter } from '@ant-design/pro-utils';
import type { RangePickerProps } from 'antd/lib/date-picker';
import React, { useContext } from 'react';
import FieldContext from '../../FieldContext';
import type { ProFormFieldItemProps } from '../../typing';
import ProField from '../Field';

const valueType = 'dateQuarterRange' as const;

/**
 * 季度份区间选择组件
 *
 * @param
 */
const DateQuarterRangePicker: React.FC<ProFormFieldItemProps<RangePickerProps>> = React.forwardRef(
  ({ fieldProps, proFieldProps, ...rest }, ref) => {
    const context = useContext(FieldContext);
    return (
      <ProField
        ref={ref}
        fieldProps={{ getPopupContainer: context.getPopupContainer, ...fieldProps }}
        valueType={valueType}
        proFieldProps={proFieldProps}
        filedConfig={{
          valueType,
          lightFilterLabelFormatter: (value) =>
            dateArrayFormatter(value, fieldProps?.format || 'YYYY-W'),
        }}
        {...rest}
      />
    );
  },
);

export default DateQuarterRangePicker;
