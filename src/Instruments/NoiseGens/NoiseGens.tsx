import React, { Component } from "react";
import { Noise, AutoFilter, Master } from "tone";
import { Slider } from 'E:/Experiment/src/Components/Slider/Slider'

export type NoiseType = 'white' | 'pink' | 'brown';

interface NoiseGenState {
    noiseUsed: NoiseType 
    volume: number
}

export class NoiseGen extends Component<{}, NoiseGenState> {
    state: Readonly<NoiseGenState> = {
        noiseUsed: 'white', // Need to just make separate generators with sliders. Updating state doesn't seem to change the sound of the generator. 
        volume: 0
    }

    noiseGen = new Noise(this.state.noiseUsed).toMaster()
    autoFilter = new AutoFilter().connect(Master);

    handleVolumeChange = (event: any) => {
        this.setState({ volume: event.currentTarget.value })
        this.noiseGen.volume.value = this.state.volume
    };

    handleNoiseChange = (event: React.FormEvent<HTMLSelectElement>) => {
        this.setState({ noiseUsed: event.currentTarget.value as NoiseType })
    };

    handleStart = () => {
        this.noiseGen.connect(this.autoFilter)
        this.noiseGen.start()
        this.autoFilter.start()
    };
    
    handleStop = () => {
        this.noiseGen.stop()
        this.autoFilter.stop()
    };

    render() {
        return (
            <div>
                <button onClick={this.handleStart}>start</button>
                <button onClick={this.handleStop}>stop</button>
                <select onChange={this.handleNoiseChange} value={this.state.noiseUsed}>
                    <option selected value='white'>White</option>
                    <option value='pink'>Pink</option>
                    <option value='brown'>Brown</option>
                </select>
                <Slider max={6} min={-6} defaultValue={0} value={this.state.volume} onChange={this.handleVolumeChange}/>
            </div>
        )
    }
}