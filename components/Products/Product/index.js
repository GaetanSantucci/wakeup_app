export default function Post({ postData }) {
  return (
    <div className='bg-gray-800 h-screen p-16 text-gray-100'>
      <div className='text-center font-bold text-3xl'>
        {postData.title}
      </div>
      <div className='text-justify my-8 text-gray-200'>
        {postData.description}
      </div>
      <div className="text-gray-400">
        Published On: {postData.date}
      </div>
    </div>
  );
}