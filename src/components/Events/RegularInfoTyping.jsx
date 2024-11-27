/* eslint-disable react/prop-types */

export default function RegularInfoTyping({
    label,
  value,
  valueClassName
}) {
  return <div className={`text-sm items-center flex gap-1`}>
                            <p className='font-medium text-gray-300'>
                                {label}
                            </p>
                            {valueClassName?<p className={valueClassName}>{value}</p>: <p className='text-gray-400 font-medium'>{value}</p>
                                }
                            
        </div>;
}
  