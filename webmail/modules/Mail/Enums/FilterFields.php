<?php
/**
 * This code is licensed under AGPLv3 license or Afterlogic Software License
 * if commercial version of the product was purchased.
 * For full statements of the licenses see LICENSE-AFTERLOGIC and LICENSE-AGPL3 files.
 */

namespace Aurora\Modules\Mail\Enums;

/**
 * @license https://www.gnu.org/licenses/agpl-3.0.html AGPL-3.0
 * @license https://afterlogic.com/products/common-licensing Afterlogic Software License
 * @copyright Copyright (c) 2023, Afterlogic Corp.
 *
 * @package Sieve
 * @subpackage Enum
 */
class FilterFields extends \Aurora\System\Enums\AbstractEnumeration
{
    public const From = 0;
    public const To = 1;
    public const Subject = 2;
    public const XSpam = 3;
    public const XVirus = 4;
    public const CustomHeader = 5;
}
