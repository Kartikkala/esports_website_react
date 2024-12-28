/* eslint-disable react/prop-types */
export default function Notification({subject, content, date, deleteFunction})
{
  const dateObject = new Date(date)
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    
};
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(dateObject);

    return (
        <div className="flex flex-col gap-2 z-50">
          <div className="succsess-alert cursor-default flex items-center justify-between w-full h-fit px-[10px] py-[4px] border-2 border-gray-800 rounded-[1.5em] bg-gradient-to-r from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-lg shadow-lg">
            <div className="flex gap-2 w-full">
              <div className="flex-col flex w-full gap-1">
                <div className="flex min-w-full items-center gap-2 justify-between">
                    <p className="text-white text-[14px]">{subject}</p>
                </div>
                <div>
                  <div className="flex">
                      <p className="text-gray-500">{content}</p>
                  </div>
                  <div className="flex">
                      <p className="text-purple-200 text-[12px] relative top-[1px]">{formattedDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

