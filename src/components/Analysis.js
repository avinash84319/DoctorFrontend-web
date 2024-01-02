import '../css/Analysis.css';

function Analysis() {
    return (
        <div className='analysis-comp'>
        <textarea className='analysis-text' placeholder='Analysis or Suggestions'></textarea>
        <textarea className='analysis-text' placeholder='Next appointment pointers'></textarea>
        <textarea className='analysis-text' placeholder='Comments on medical history'></textarea>
        </div>
    ); 
}

export default Analysis;