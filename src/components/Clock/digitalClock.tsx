import React, {FC} from 'react';


type DigitalClockType = {
    data: Date
}

export const DigitalClock: FC<DigitalClockType> = ({data}) => {
    const clockEdit = (num: number) => num < 10 ? '0' + num : num

    return (
        <>
        <span>
              {clockEdit(data.getHours())}
            </span>
            <span>
                : {clockEdit(data.getMinutes())}
            </span>
            <span>
                : {clockEdit(data.getSeconds())}
            </span>
        </>
    );
};

