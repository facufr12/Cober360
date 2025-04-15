// import node module libraries
import { Breadcrumb, Col, Row } from 'react-bootstrap'

// import required sub component
import TableBasic from './TableBasic'
import TableDark from './TableDark'
import TableHeadOptions from './TableHeadOptions'
import TableStriped from './TableStriped'
import TableBordered from './TableBordered'
import TableBorderedColor from './TableBorderedColor'
import TableBorderless from './TableBorderless'
import TableHover from './TableHover'
import TableNesting from './TableNesting'
import TableActive from './TableActive'
import TableSmall from './TableSmall'

// import required layout
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import required data file
import BasicTableData from 'data/dashboard/tables/BasicTableData'
import BasicNestedTableData from 'data/dashboard/tables/BasicNestedTableData';

const BasicTables = () => {
  return (
    <DocsInnerLayout isOpen={false} fullWidth>
      <div className="docs-content mx-xxl-9">
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="mb-8" id="intro">
              <h1 className="fw-bold display-3">Tables</h1>
            </div>
          </Col>
        </Row>


        <Row>

          <Col xl={6} xs={12} className="mb-5">
            {/* Table Basic */}
            <TableBasic TableData={BasicTableData} />
          </Col>

          <Col xl={6} xs={12} className="mb-5">
            {/* Table Dark */}
            <TableDark TableData={BasicTableData} />
          </Col>

          <Col xl={6} xs={12} className="mb-5">
            {/*  Table Head Options */}
            <TableHeadOptions TableData={BasicTableData} />
          </Col>

          <Col xl={6} xs={12} className="mb-5">
            {/* Table Striped */}
            <TableStriped TableData={BasicTableData} />
          </Col>

          <Col xl={6} xs={12} className="mb-5">
            {/* Table Bordered */}
            <TableBordered TableData={BasicTableData} />
          </Col>

          <Col xl={6} xs={12} className="mb-5">
            {/* Table Bordered Color */}
            <TableBorderedColor TableData={BasicTableData} />
          </Col>

          <Col xl={6} xs={12} className="mb-5">
            {/* Table Borderless */}
            <TableBorderless TableData={BasicTableData} />
          </Col>

          <Col xl={6} xs={12} className="mb-5">
            {/* Table Hover */}
            <TableHover TableData={BasicTableData} />
          </Col>

          <Col xl={6} xs={12} className="mb-5">
            {/* Nesting Table */}
            <TableNesting TableData={BasicNestedTableData} />
          </Col>

          <Col xl={6} xs={12} className="mb-5">
            {/* Table Active */}
            <TableActive TableData={BasicTableData} />
          </Col>

          <Col xl={6} xs={12} className="mb-5">
            {/* Table Small */}
            <TableSmall TableData={BasicTableData} />
          </Col>

        </Row>
      </div>
    </DocsInnerLayout>
  )
}

export default BasicTables