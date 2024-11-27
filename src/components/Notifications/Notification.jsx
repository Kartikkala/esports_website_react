/* eslint-disable react/prop-types */
export default function Notification({subject, content, date})
{
    return (
        <div className="flex flex-col gap-2 text-[10px] z-50">
          <div className="succsess-alert cursor-default flex items-center justify-between w-full h-fit px-[10px] py-[4px] border-2 border-gray-800 rounded-[1.5em] bg-gradient-to-r from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-lg shadow-lg">
            <div className="flex gap-2 w-full">
              <div className="flex-col flex w-full">
                <div className="flex min-w-full items-center gap-2 justify-between">
                    <p className="text-white text-xs">{subject}</p>
                    <p className="text-gray-500 relative top-[1px]">{date}</p>
                </div>
                <div className="flex">
                    <p className="text-gray-500">{content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

