import Button from '../../components/Button'

function Survey() {
  return (
    <div className="h-screen mt-40">
      <p className="text-center font-bold text-2xl">📝 Survey Page 📄</p>
      <div className="flex items-center justify-center gap-10 mt-10">
        <Button>Previous</Button>
        <Button>Next</Button>
      </div>
    </div>
  )
}

export default Survey
