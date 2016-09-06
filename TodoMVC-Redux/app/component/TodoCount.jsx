import React, {Component, PropTypes} from 'react';

class TodoCount extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let numofUndoTask = 0;
        let numofFinishTask = 0;
        const {tasks}=this.props;
        tasks.map((item)=> {
            if (item.completed === false) {
                numofUndoTask++;
            }
            else {
                numofFinishTask++;
            }
        });
        return (
            <div className="count">
                <p> Total task: {tasks.length}    |    Finished task：{numofFinishTask}    |    Undo task：{numofUndoTask}</p>
            </div>
        );
    }
}

TodoCount.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })
    )
};

export default TodoCount;
