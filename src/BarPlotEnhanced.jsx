import { scaleLinear, scaleBand} from 'd3';


const BarPlotEnhanced = ({ height, width }) => {
    const MARGIN_y = 20;

    const data = [
        { count: 6, name: "Hantavirus" },
        { count: 7, name: "Tularemia" },
        { count: 7, name: "Dengue" },
        { count: 9, name: "Ebola" },
        { count: 11, name: "E. coli" },
        { count: 15, name: "Tuberculosis" },
        { count: 17, name: "Salmonella" },
        { count: 18, name: "Vaccinia" },
        { count: 54, name: "Brucella" },
    ];  

    const xScale = scaleLinear()
    .domain([0, 55])
    .range([0, width]);

    const yScale = scaleBand()
    .domain(data.map((d) => d.name))
    .range([height - MARGIN_y, MARGIN_y])
    .padding(.3); 

    const bars = (
        <g>
            {data.map((d) => (
                <rect rx="4" ry="4"
                key={d.name} x={xScale(0)} y={yScale(d.name)} width={xScale(d.count)} height={yScale.bandwidth()} fill="#076fa2" />
            ))}
        </g>
    )

    const barText = (
        <g>
            {data.map((d, i) =>
            (
                <text key={i} x={xScale(0.5)} y={yScale(d.name)+yScale.bandwidth()/2} dy="0.33em" textAnchor="start" fontSize="14px" fill={"white"}>
                    {d.name}
                </text>
            ))}
        </g>
    )

    const barLabels = (
        <g>
            {data.map((d, i) =>
            (
                <text key={i} x={xScale(d.count-.5)} y={yScale(d.name)+yScale.bandwidth()/2} dy="0.33em" textAnchor="end" fontSize="12px" fill={"lightgrey"}>
                    {d.count}
                </text>
            ))}
        </g>
    )

    const inlineText = (
        <g>
            <text x={xScale(0)} y={height - 15} textAnchor="start" fontSize="12px" fill="#808080">
            Sources: Laboratory-Acquired Infection Database; American Biological Safety Association
            </text>
            <text x={xScale(0)} y={height} textAnchor="start" fontSize="12px" fill="#808080">
            The Economist (<a textDecoration="underline" target="_blank" href="https://www.economist.com/graphic-detail/2021/08/24/infections-caught-in-laboratories-are-surprisingly-common">original source</a>)
            </text>
        </g>
    )

    return (
        <svg width={width} height={height} backgroundColor="#fff" overflow={"visible"}>
            {/* {xAxis} */}
            {/* {gridLines} */}
            {bars}
            {barText}
            {inlineText}
            {barLabels}
        </svg>
    )
}

export default BarPlotEnhanced;