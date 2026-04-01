import { scaleLinear, scaleBand} from 'd3';


const BarPlot = ({ height, width }) => {
    const MARGIN_x = 20;
    const MARGIN_y = 30;

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

    const xTickLabels = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
    const xScale = scaleLinear()
    .domain([0, 55])
    .range([0, width]);

    const yScale = scaleBand()
    .domain(data.map((d) => d.name))
    .range([height - MARGIN_y, MARGIN_y])
    .padding(.3); 


    const xAxis = (
        <g>
            {xTickLabels.map((tick) => (
                <text key={tick} x={xScale(tick)} y={25} textAnchor='middle' fontSize="12px" fill="#808080">
                    {tick}
                </text>
            ))}
        </g>
    )

    const gridLines = (
        <g>
            {xTickLabels.map((tick) => (
                <line key={tick} x1={xScale(tick)} y1={MARGIN_y+5} x2={xScale(tick)} y2={height - MARGIN_y - 5} stroke="#808080" strokeWidth="1" opacity={.5} />
            ))}
            {<line key='x0' x1={xScale(0)} y1={MARGIN_y+5} x2={xScale(0)} y2={height - MARGIN_y - 5} stroke="black" strokeWidth="1" />}
        </g>
    )


    const bars = (
        <g>
            {data.map((d) => (
                <rect key={d.name} x={xScale(0)} y={yScale(d.name)} width={xScale(d.count)} height={yScale.bandwidth()} fill="#076fa2" />
            ))}
        </g>
    )

    const barText = (
        <g>
            {data.map((d, i) =>
            (
                <text key={i} x={d.count > 7 ? xScale(0.5) : xScale(d.count)+xScale(.5)} y={yScale(d.name)+yScale.bandwidth()/2} textAnchor="start" fontSize="14px" fill={d.count > 7 ? "white" : "#076fa2"}>
                    {d.name}
                </text>
            ))}
        </g>
    )

    const inlineText = (
        <g>
            <text x={xScale(0)} y={height - 20} textAnchor="start" fontSize="12px" fill="#808080">
            Sources: Laboratory-Acquired Infection Database; American Biological Safety Association
            </text>
            <text x={xScale(0)} y={height - 5} textAnchor="start" fontSize="12px" fill="#808080">
            The Economist
            </text>
        </g>
    )

    return (
        <svg width={width} height={height} backgroundColor="#fff" overflow={"visible"}>
            {/* <rect x={0} y={0} width="100%" height="100%" fill="lightgrey" /> */}
            {xAxis}
            {gridLines}
            {bars}
            {barText}
            {inlineText}
        </svg>
    )
}

export default BarPlot;